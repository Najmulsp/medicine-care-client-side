import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const ManageCamps = () => {
  const axiosSecure = useAxiosSecure();

  const {data: camps = [], refetch } = useQuery({
    queryKey: ['camps'],
    queryFn: async () =>{
      const res = await axiosSecure.get('/popularCamps');
      return res.data
    }
  })
  


        // Delete camp
  const handledelete = id =>{
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
        axiosSecure.delete(`/delete/${id}`)
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
        <div className="p-20">
          <h1 className="text-3xl text-center font-bold py-10">You can update or delete camp data</h1>
             <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Name</th>
        <th>Date & Time</th>
        <th>Location</th>
        <th>Healthcarer</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {/* rows */}
      {
        camps?.map(camp =>
          <tr key={camp._id}>
        <th>
          <p>{camp.name}</p>
        </th>
        <td>
          <p>{camp.date}</p>
        </td>
        <td>
          <p>{camp.location}</p>
        </td>
        <td><p>{camp.healthcarer}</p></td>
        <th>
          <Link to={`update/${camp._id}`}><button className="btn text-black btn-ghost bg-sky-400 btn-xs">Update</button></Link>
        </th>
        <th>
        <button onClick={()=>handledelete(camp._id)} className="btn text-black btn-ghost bg-rose-400 btn-xs">Delete</button>
        </th>
      </tr>
        )
      }  
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ManageCamps;
