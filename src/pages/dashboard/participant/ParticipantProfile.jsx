import { useContext } from "react";
import { AuthContext } from "../../../authentication/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";


const ParticipantProfile = () => {
	const {user} = useContext(AuthContext)
	console.log(user?.email)
	const axiosSecure = useAxiosSecure();

	const {
		register,
		handleSubmit,
		reset,
	} = useForm();


	const {data: profile = {} , refetch } = useQuery({
        queryKey: ['profile'],
        queryFn: async () =>{
          const res = await axiosSecure.get(`/users/${user?.email}`);
          return res.data
        }
      })
	// console.log(profile.name)

	const onSubmit = async (data) => {

		axiosSecure.patch(`/updateProfile/${user?.email}`, data)
		.then(res=>{
			console.log(res.data)
			if(res.data.modifiedCount > 0 ){
				
				Swal.fire({
					position: "top-end",
					icon: "success",
					title: "Your profile data updated successfully",
					showConfirmButton: false,
					timer: 1500
				});
			reset()
			refetch()
			}
			
		})

	}





    return (
        <div className="flex justify-center mt-20 lg:mt-40 items-center">
            <div className="max-w-md p-8 sm:flex sm:space-x-6 dark:bg-sky-50  dark:bg-opacity-50">
	<div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
		<img src={profile?.photoURL} alt="" className="object-cover object-center w-full h-full rounded dark:bg-sky-500" />
	</div>
	<div className="flex flex-col space-y-4">
		<div>
			<h2 className="text-2xl font-semibold">{profile?.name}</h2>
			<span className="text-sm dark:text-gray-600">Participant</span>
		</div>
		<div className="space-y-1">
			<span className="flex items-center space-x-2">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Email address" className="w-4 h-4">
					<path fill="currentColor" d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"></path>
				</svg>
				<span className="dark:text-gray-600">{profile?.email}</span>
			</span>
			<span className="flex items-center space-x-2">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Phonenumber" className="w-4 h-4">
					<path fill="currentColor" d="M449.366,89.648l-.685-.428L362.088,46.559,268.625,171.176l43,57.337a88.529,88.529,0,0,1-83.115,83.114l-57.336-43L46.558,362.088l42.306,85.869.356.725.429.684a25.085,25.085,0,0,0,21.393,11.857h22.344A327.836,327.836,0,0,0,461.222,133.386V111.041A25.084,25.084,0,0,0,449.366,89.648Zm-20.144,43.738c0,163.125-132.712,295.837-295.836,295.837h-18.08L87,371.76l84.18-63.135,46.867,35.149h5.333a120.535,120.535,0,0,0,120.4-120.4v-5.333l-35.149-46.866L371.759,87l57.463,28.311Z"></path>
				</svg>
				<span className="dark:text-gray-600">{profile?.phone}</span>
			</span>
			
			<button
                className="btn bg-gradient-to-r from-sky-500 via-sky-400 to-sky-700 hover:bg-gradient-to-br focus:ring-purple-300"
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
              >
                Update Profile
              </button>
              <dialog
                id="my_modal_5"
                className="modal modal-bottom max-w-5xl mx-auto flex items-center"
              >
                <div className="modal-box">
                  <h3 className="font-bold text-center text-lg">
                    You Can Update Your Profile
                  </h3>
                  <div className="grid grid-cols-2 gap-6 p-6 rounded-md shadow-sm ">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                      className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3"
                    >
                      {/* Organizer Name */}
                      <div className="col-span-full sm:col-span-3">
                        <label
                          htmlFor="bio"
                          className="text-sm p-1 flex justify-start"
                        >
                          Your Name
                        </label>
                        <input
                        
                          {...register("userName")}
                          type="text"
                          defaultValue={profile?.name}
                          className="w-full border-2  rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300 p-3"
                        ></input>
                      </div>
                      {/* Participant Email */}
                      <div className="col-span-full sm:col-span-3">
                        <label
                          htmlFor="bio"
                          className="text-sm p-1 flex justify-start"
                        >
                          Your Email
                        </label>
                        <input
                          {...register("userEmail")}
                          type="email"
                          defaultValue={profile?.email}
                          
                          className="w-full border-2  rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300 p-3"
                        ></input>
                      </div>
                      {/* Image */}
                      <div className="col-span-full sm:col-span-3">
                        <label
                          htmlFor="bio"
                          className="text-sm p-1 flex justify-start"
                        >
                          Image URL
                        </label>
                        <input
                          {...register("image")}
                          type="text"
                          defaultValue={profile?.photoURL}
                          className="w-full border-2  rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300 p-3"
                        ></input>
                      </div>
                                    {/* Age */}
                      <div className="col-span-full sm:col-span-1">
                        <label
                          htmlFor="bio"
                          className="text-sm p-1 flex justify-start"
                        >
                          Your Age
                        </label>
                        <input
                          {...register("age")}
                          type="number"
                          placeholder="Your Age"
                          className="w-full border-2  rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300 p-3"
                        ></input>
                      </div>
                                  {/* Gender */}
                      <div className="col-span-full sm:col-span-2">
                        <label
                          htmlFor="bio"
                          className="text-sm p-1 flex justify-start"
                        >
                          Your Gender
                        </label>
                        <select
                        {...register("gender")}
                         className="select select-bordered w-full max-w-xs">
                          <option disabled>
                            Your Gender
                          </option>
                          <option>Male</option>
                          <option>Female</option>
                        </select>
                      </div>
                                    {/* Phone Number */}
                      <div className="col-span-full sm:col-span-3">
                        <label
                          htmlFor="bio"
                          className="text-sm p-1 flex justify-start"
                        >
                          Your Phone Number
                        </label>
                        <input
                          {...register("phone")}
                          type="number"
                          placeholder="Your Phone Number"
                          className="w-full border-2  rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300 p-3"
                        ></input>
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
                    </form>
                  </div>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn bg-gradient-to-r from-sky-500 via-sky-400 to-sky-700 hover:bg-gradient-to-br focus:ring-purple-300">
                        Close
                      </button>
                    </form>
                  </div>
                </div>
              </dialog>
		</div>
	</div>
</div>
        </div>
    );
};

export default ParticipantProfile;