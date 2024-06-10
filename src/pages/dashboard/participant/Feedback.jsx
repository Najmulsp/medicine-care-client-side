import { useContext } from "react";
import { AuthContext } from "../../../authentication/AuthProvider";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const Feedback = () => {
  const { user } = useContext(AuthContext);
  console.log(user)
  const axiosPublic = useAxiosPublic()
  const {
    register,
    handleSubmit,
    reset,
} = useForm();


  const onSubmit = async (data) => {
	axiosPublic.post(`/feedbacks`, data)
		.then(res=>{
			console.log(res.data)
			if(res.data.insertedId){
				
				Swal.fire({
					position: "top-end",
					icon: "success",
					title: "Your feedback added successfully",
					showConfirmButton: false,
					timer: 1500
				});
			reset()
			
			}
			
		})

  }

  return (
    <div className="p-20 text-center">
      <h2 className="my-10">Give Your Feedback</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-3 gap-6 p-6 rounded-md shadow-sm dark:bg-sky-50 max-w-xl mx-auto">
        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
          <div className="col-span-full sm:col-span-3">
            <label htmlFor="username" className="text-sm">
              Name
            </label>
            <input
              {...register("name")}
              type="text"
              defaultValue={user?.displayName}
              className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-sky-100 focus:dark:ring-violet-600 dark:border-gray-300"
            />
          </div>
          <div className="col-span-full sm:col-span-3">
            <label htmlFor="website" className="text-sm">
              Email
            </label>
            <input
              {...register("email")}
              type="text"
              defaultValue={user?.email}
              className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
            />
          </div>
          <div className="col-span-full sm:col-span-3">
            <label htmlFor="website" className="text-sm">
              Photo
            </label>
            <input
              {...register("image")}
              type="text"
              defaultValue={user?.photoURL}
              className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
            />
          </div>
          <div className="col-span-full sm:col-span-3">
            <label htmlFor="website" className="text-sm">
              Ratings
            </label>
            <input
              {...register("rating")}
              type="number"
              placeholder="0-5"
              className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
            />
          </div>
          <div className="col-span-full">
            <label htmlFor="bio" className="text-sm">
              Your Feedback
            </label>
            <textarea
              {...register("feedback")}
              placeholder="Write something"
              className="w-full p-4 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
            ></textarea>
          </div>
                {/* submit button */}
          <div className="col-span-full mt-5">
                        <button
                          type="submit"
                          className="bg-gradient-to-r from-cyan-400 via-cyan-500- to-cyan-700 hover:bg-gradient-to-br focus:ring-cyan-300 dark:text-black rounded-md btn btn-block p-3"
                        >
                          Submit
                        </button>
          </div>
        </div>
         
      </form>
    </div>
  );
};

export default Feedback;
