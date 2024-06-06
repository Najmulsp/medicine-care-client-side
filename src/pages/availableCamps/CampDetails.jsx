import { FaLocationDot } from "react-icons/fa6";
import { useLoaderData } from "react-router-dom";
import { FaTruckMedical } from "react-icons/fa6";
import { TbMedicalCross } from "react-icons/tb";
import { LiaFileMedicalAltSolid } from "react-icons/lia";
import { GiMedicalDrip } from "react-icons/gi";
import { useContext } from "react";
import { AuthContext } from "../../authentication/AuthProvider";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const CampDetails = () => {
  const camp = useLoaderData();
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  // console.log(camp);
  const {
    register,
    handleSubmit,
    reset,
    // formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data)
    // e.preventDefault();

    // const postTitle = e.target.title.value;
    // const description = e.target.description.value;
    // const category = e.target.category.value;   
    // const volunteerEmail = user?.email;   
    // const photo = e.target.photo.value;

    // const newRequest = {postTitle, description, category, location,  volunteerEmail, photo }

    // send data to the server
    // fetch('http://localhost:5000/campDetails/join', {
    //     method: 'POST',
    //     headers:{'content-type' : 'application/json'},
    //     body:JSON.stringify(data)
    // }, {Credentials: "include"})
    // .then(res => res.json())
    axiosSecure.post('/campDetails/join', data)
    .then(res => {
        console.log(res.data)
        if(res.data?.insertedId){
          reset()
          toast("Your have successfully registered")

          // update Participants
        fetch(`http://localhost:5000/updateParticipants/${camp?._id}`,{
                  method: "PATCH",
                  headers: { "content-type": "application/json" },
                  // body: JSON.stringify(Participants),
                })
                .then(res => res.json())
                .then(data =>{
                    if(data.modifiedCount > 0){
        
                      camp.participants = camp?.participants +1;
                    }
                  console.log(data)
                })
          
        // const {data, refetch} = useQuery({
        //   queryKey: ['data'],
        //   queryFn: async () =>{
        //     const res = await axiosSecure.patch(`/updateParticipants/${camp?._id}`)
        //     return res.data
        //   }
        // })
                
        }
    })
  }

  return (
    <section className="w-full min-h-screen bg-red-100">
      <div className="dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={camp.image}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
          <div>
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
              {camp.name}
            </h1>
            <div className="flex justify-between items-center my-6 border">
              <p className=" text-lg">Date: {camp.date}</p>
              <p>Fees: {camp.fees}</p>
            </div>
            <div className="flex justify-between items-center my-6 border">
              <p className="flex items-center gap-1">
                <FaLocationDot className="text-cyan-400" /> {camp.location}
              </p>
              <p>Participants: {camp.participants}</p>
            </div>
            <div className="flex justify-between items-center my-6 border">
              <p>Healthcare Professional: {camp.healthcarer}</p>

                              {/* join camp modal starts */}
              <button
                className="btn bg-gradient-to-r from-sky-500 via-sky-400 to-sky-700 hover:bg-gradient-to-br focus:ring-purple-300"
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
              >
                Join Camp
              </button>
              <dialog
                id="my_modal_5"
                className="modal modal-bottom max-w-5xl mx-auto flex items-center"
              >
                <div className="modal-box">
                  <h3 className="font-bold text-center text-lg">
                    Give your data for registration.
                  </h3>
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
                          defaultValue={camp?.name}
                          readOnly
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
                          type="text"
                          defaultValue={camp?.fees}
                          readOnly
                          className="w-full border-2  rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300 p-3"
                        ></input>
                      </div>
                      {/* Location */}
                      <div className="col-span-full sm:col-span-2">
                        <label
                          htmlFor="website"
                          className="text-sm p-1 flex justify-start"
                        >
                          Location
                        </label>
                        <input
                          {...register("location")}
                          type="text"
                          defaultValue={camp?.location}
                          readOnly
                          className="w-full border-2  rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300 p-3"
                        />
                      </div>

                      {/* Healthcare Professional Name */}
                      <div className="col-span-full sm:col-span-3">
                        <label
                          htmlFor="website"
                          className="text-sm p-1 flex justify-start"
                        >
                          Healthcare Professional
                        </label>
                        <input
                          {...register("Healthcarer")}
                          type="email"
                          defaultValue={camp?.healthcarer}
                          readOnly
                          className="w-full border-2 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300 p-3"
                        ></input>
                      </div>

                      {/* Participant Name */}
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
                          // defaultValue={user?.name}
                          placeholder="Your Name"
                          
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
                          defaultValue={user?.email}
                          readOnly
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

                                  {/* Emergency Contact */}
                      <div className="col-span-full sm:col-span-3">
                        <label
                          htmlFor="bio"
                          className="text-sm p-1 flex justify-start"
                        >
                          Emergency Contact
                        </label>
                        <input
                          {...register("contact")}
                          type="text"
                          placeholder="Emergency Contact"
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
              {/* modal ends */}
            </div>
          </div>
        </div>
      </div>
      {/* details part */}
      <div className="dark:bg-gray-100 dark:text-gray-800 border">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="">Description: {camp.description}</h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              Dictum aliquam porta in condimentum ac integer
              <br className="hidden md:inline lg:hidden" />
              turpis pulvinar, est scelerisque ligula sem
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50"
              >
                Suspendisse
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800"
              >
                Malesuada
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            {/* four grid container */}
            <div className="dark:bg-gray-100 dark:text-gray-800 border">
              <div className="container px-6 py-12 mx-auto">
                <div className="p-6 xl:col-span-3">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="grid content-center gap-4">
                      <div className="p-6 border rounded shadow-md dark:bg-gray-50">
                        <div className="flex flex-col items-center p-4">
                          <FaTruckMedical className="text-3xl" />
                          <h3 className="my-3 text-3xl font-semibold">
                            Medical Treatment
                          </h3>
                          <div className="space-y-1 leading-tight">
                            <p>Similique quas ea veniam</p>
                            <p>Tempore quasi porro</p>
                            <p>Blanditiis aut mollitia ex</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-6 rounded shadow-md dark:bg-gray-50">
                        <div className="flex flex-col items-center p-4">
                          <TbMedicalCross className="text-3xl" />
                          <h3 className="my-3 text-3xl font-semibold">
                            Emergency Help
                          </h3>
                          <div className="space-y-1 leading-tight">
                            <p>Similique quas ea veniam</p>
                            <p>Tempore quasi porro</p>
                            <p>Blanditiis aut mollitia ex</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid content-center gap-4">
                      <div className="p-6 rounded shadow-md dark:bg-gray-50">
                        <div className="flex flex-col items-center p-4">
                          <LiaFileMedicalAltSolid className="text-3xl" />
                          <h3 className="my-3 text-3xl font-semibold">
                            Medical professionals
                          </h3>
                          <div className="space-y-1 leading-tight">
                            <p>Similique quas ea veniam</p>
                            <p>Tempore quasi porro</p>
                            <p>Blanditiis aut mollitia ex</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-6 rounded shadow-md dark:bg-gray-50">
                        <div className="flex flex-col items-center p-4">
                          <GiMedicalDrip className="text-3xl" />
                          <h3 className="my-3 text-3xl font-semibold">
                            Qualified Doctors
                          </h3>
                          <div className="space-y-1 leading-tight">
                            <p>Similique quas ea veniam</p>
                            <p>Tempore quasi porro</p>
                            <p>Blanditiis aut mollitia ex</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampDetails;
