import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

import Swal from "sweetalert2";


const AddCamp = () => {
    const axiosSecure = useAxiosSecure();
    const {
        register,
        handleSubmit,
        reset,
      } = useForm();

      const onSubmit = async (data) => {
        data.participantCount = parseInt(data.participantCount, 10);
        data.fees = parseInt(data.fees, 10);

        axiosSecure.post('/addACamp', data)
        .then(res=>{ 
        if (res.data?.insertedId) {
            console.log(res.data)
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Camp data added successfully",
                showConfirmButton: false,
                timer: 1500
            });
            
            reset();
          } 
         }) 
      }
    return (
        <div className="p-20">
             <div className="grid grid-cols-2 gap-6 p-6 rounded-md shadow-sm ">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                      className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3"
                    >
                      {/* Camp Name */}
                      <div className="col-span-full sm:col-span-3">
                        <label
                          htmlFor="username"
                          className="text-sm p-1 flex justify-start"
                        >
                          Camp Name
                        </label>
                        <input
                          {...register("name")}
                          type="text"
                          placeholder="Camp Name"
                          
                          className="w-full border-2  rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300 p-3"
                        />
                      </div>
                      {/* Camp image */}
                      <div className="col-span-full sm:col-span-3">
                        <label
                          htmlFor="username"
                          className="text-sm p-1 flex justify-start"
                        >
                          Image
                        </label>
                        <input
                          {...register("image")}
                          type="text"
                          placeholder="Image URL"
                          
                          className="w-full border-2  rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300 p-3"
                        />
                      </div>
                      {/* Location */}
                      <div className="col-span-full sm:col-span-3">
                        <label
                          htmlFor="website"
                          className="text-sm p-1 flex justify-start"
                        >
                          Location
                        </label>
                        <input
                          {...register("location")}
                          type="text"
                          placeholder="Location"
                          
                          className="w-full border-2  rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300 p-3"
                        />
                      </div>
                      {/* Camp Fees */}
                      <div className="col-span-full sm:col-span-1">
                        <label
                          htmlFor="Fees"
                          className="text-sm p-1 flex justify-start"
                        >
                          Camp Fees
                        </label>
                        <input
                          {...register("fees")}
                          type="number"
                          placeholder="Fees"
                          
                          className="w-full border-2  rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300 p-3"
                        ></input>
                      </div>
                      {/* Date and Time */}
                      <div className="col-span-full sm:col-span-2">
                        <label
                          htmlFor="Fees"
                          className="text-sm p-1 flex justify-start"
                        >
                          Date
                        </label>
                        <input
                          {...register("date")}
                          type="date"
                          placeholder="Date"
                          
                          className="w-full border-2  rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300 p-3"
                        ></input>
                      </div>
                      {/* Description */}
                      <div className="col-span-full sm:col-span-3">
                        <label
                          htmlFor="bio"
                          className="text-sm p-1 flex justify-start"
                        >
                          Description
                        </label>
                        <input
                          {...register("description")}
                          type="text"
                          placeholder="Description"
                          className="w-full border-2  rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300 p-3"
                        ></input>
                      </div>
                        {/* Participant Count */}
                      <div className="col-span-full sm:col-span-1">
                        <label
                          htmlFor="bio"
                          className="text-sm p-1 flex justify-start"
                        >
                          Participant Count
                        </label>
                        <input
                        
                          {...register("participantCount")}
                          type="number"
                          
                          placeholder="0"
                          
                          className="w-full border-2  rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300 p-3"
                        ></input>
                      </div>
                      {/* Healthcare Professional Name */}
                      <div className="col-span-full sm:col-span-2">
                        <label
                          htmlFor="website"
                          className="text-sm p-1 flex justify-start"
                        >
                          Healthcare Professional
                        </label>
                        <input
                          {...register("Healthcarer")}
                          type="text"
                          placeholder="Healthcarer Name"
                          className="w-full border-2 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300 p-3"
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
        </div>
    );
};

export default AddCamp;