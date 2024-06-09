import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useParticipantCamps from "../../../hooks/useParticipantCamps";
import { AuthContext } from "../../../authentication/AuthProvider";
import Swal from "sweetalert2";

const CheckoutForm = () => {
    const {user} = useContext(AuthContext);
    const [camps, refetch] = useParticipantCamps();
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState('');
   const [clientSecret, setClientSecret] = useState('');
   const [transactionId, setTransactionId] = useState('');

    const totalFees = camps?.reduce((total, camp) => total + camp.fees, 0)
    console.log(totalFees)
const axiosSecure = useAxiosSecure();
useEffect(()=>{
    if (totalFees > 0) {
    axiosSecure.post('/create-payment-intent', {fees: totalFees})
    .then(res =>{
        console.log(res.data.clientSecret)
        setClientSecret(res.data.clientSecret)
    })
}
},[axiosSecure, totalFees])




  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setError(error.message)
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError('')
    }

    // confirm payment
    const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
            card: card,
            billing_details: {
                email: user?.email || 'anonymous',
                name: user?.displayName || 'anonymous'
            }
        }
    })
    if (confirmError) {
        console.log(confirmError);
        
      } else {
        console.log("paymentIntent", paymentIntent);
        if(paymentIntent.status === 'succeeded'){
            console.log('transaction id: ',paymentIntent.id)
            setTransactionId(paymentIntent.id)

            // now save the payment in the database
            const payment = {
                email: user?.email,
                fees: totalFees,
                transactionId: paymentIntent.id,
                campNames: camps.map(camp => camp.name),
                campIds: camps.map(item => item._id),
                status: 'pending'
            }
            const res = await axiosSecure.post('/payments', payment);
                console.log('payment saved', res.data);
                refetch();
                if (res.data?.paymentResult?.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your payment added successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
        }
      }
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
                
              },
            },
          }}
        />
        <button
          className="btn text-black my-4 dark:bg-gradient-to-r from-sky-600 via-cyan-400 to-sky-700 hover:bg-gradient-to-br focus:ring-purple-300"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
        <p className="text-2xl text-center text-red-500">{error}</p>
        {
            transactionId && <p className="text-2xl text-green-500 text-center">Your transaction id is: <span className="text-black">{transactionId}</span></p>
        }
      </form>
    </div>
  );
};

export default CheckoutForm;
