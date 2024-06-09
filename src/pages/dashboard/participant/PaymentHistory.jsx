import { useContext } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../authentication/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const PaymentHistory = () => {
	const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user?.email}`)
            return res.data;
        }
    })

console.log(payments)
    return (
        <div className="p-40">
           <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>CampName</th>
        <th>Fees</th>
        <th>Payment Status</th>
        <th>Confirmation Status</th>
      </tr>
    </thead>
    <tbody>
      {/* rows */}
      {
		payments?.map(payment=><tr key={payment._id}>
			<th>{payment.email}</th>
			<td>{payment.fees}</td>
			<td>{payment.transactionId}</td>
			<td>{payment.status}</td>
		</tr>)
	}
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default PaymentHistory;