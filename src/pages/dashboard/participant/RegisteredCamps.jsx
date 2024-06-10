
import Swal from "sweetalert2";
import useParticipantCamps from "../../../hooks/useParticipantCamps";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";



const RegisteredCamps = () => {
  const [camps, refetch] = useParticipantCamps();
  const axiosSecure = useAxiosSecure();


        // cancel camp
  const handleCancel = id =>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancel it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/participantCamps/${id}`)
        .then(res =>{
          if(res.data.deletedCount){
            refetch()
            Swal.fire({
          title: "Canceled!",
          text: "Your info has been canceled.",
          icon: "success"
        });
          }
        })

      }
    });
  }

    return (
        <div className="w-full border border-red-500 p-20 pr-28">
          <h1 className="text-3xl font-bold text-center text-black mb-6">You Registered Camp Info</h1>
            <div className="overflow-x-auto">
  <table className="table table-xs">
    <thead>
      <tr className="text-black">
        <th>Camp Name</th> 
        <th>Camp Fees</th> 
        <th>Participant Name</th> 
        <th>Payment Status</th> 
        <th>Confirmation Status</th> 
        <th>Cancel Button</th> 
        <th>Feedback Button</th>
      </tr>
    </thead> 
    <tbody>
      {
        camps?.map(camp => <tr key={camp._id}>
          <th>{camp.name}</th> 
          <td>{camp.fees}</td> 
          <td>{camp.userName}</td> 
          <td><Link to="/dashboard/payment" className="btn btn-ghost">Pay</Link></td> 
          <td>Pending</td> 
          <td><button
           onClick={() => {handleCancel(camp._id)}} 
           className="btn bg-orange-400">cancel</button></td> 
          <td>
            <Link to={`feedback`}><button className="btn bg-cyan-400">Feedback</button></Link>
            </td>
        </tr>)
      }
      </tbody> 
  </table>
</div>
        </div>
    );
};

export default RegisteredCamps;