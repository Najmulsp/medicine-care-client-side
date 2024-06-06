import { useQuery } from "@tanstack/react-query";
import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../../../authentication/AuthProvider";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const RegisteredCamps = () => {
  const {user} = useContext(AuthContext);
  const axiosPublic= useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const {data: camps = [], refetch } = useQuery({
    queryKey: ['camp'],
    queryFn: async () =>{
      const res = await axiosPublic.get(`/participantCamps/${user?.email}`);
      return res.data
    }
  })
  // console.log(camps)

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
          <td>Paid</td> 
          <td>Pending</td> 
          <td><button onClick={() => {handleCancel(camp._id)}} className="btn bg-orange-400">cancel</button></td> 
          <td><button className="btn bg-cyan-400">Feedback</button></td>
        </tr>)
      }
      </tbody> 
  </table>
</div>
        </div>
    );
};

export default RegisteredCamps;