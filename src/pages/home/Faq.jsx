import { useForm } from "react-hook-form";
// import { toast } from "react-toastify";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const Faq = () => {
  const axiosPublic = useAxiosPublic();


 const { register, handleSubmit, reset  } = useForm();
 const onSubmit = async data => {
 console.log(data);
 const res = await axiosPublic.post('/appointment', data);
 console.log(res)
 if (res.data?.insertedId) {
   reset();
   Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Your appointment has been saved",
    showConfirmButton: false,
    timer: 1500
  });
 }
 }
 



  return (
    <div>
      <section
        id="appointment"
        className="p-6 pb-16 bg-base-300 dark:text-gray-800"
      >
        <div className="container flex flex-col lg:flex-row">
          <fieldset className="grid grid-cols-4 gap-6 p-6 shadow-sm bg-sky-600">
            <div className="col-span-full">
              <h1 className="text-3xl text-center py-6 font-bold text-white">
                Book An Appointment
              </h1>

              <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-6 gap-4  lg:col-span-3">
                <div className="col-span-full sm:col-span-3">
                <select name="department" {...register("department")} className="select bg-blue-900 bg-opacity-50 text-white  mt-4 rounded-none select-primary border border-white w-full ">
                    <option disabled selected>
                      Select Departments
                    </option>
                    <option>Pediatric Clinic</option>
                    <option>Laryngological Clinic</option>
                    <option>Outpatient Rehabilitation</option>
                    <option>Gynaecological Clinic</option>
                    <option>Cardiac Clinicy</option>
                    <option>Outpatient Surgery</option>
                  </select>
                </div>
                <div className="col-span-full sm:col-span-3">
                  <select name="doctor" {...register("doctor")} className="select bg-blue-900 bg-opacity-50 text-white  mt-4 rounded-none select-primary border border-white w-full ">
                    <option disabled selected>
                      Select Doctors
                    </option>
                    <option>Dr. Nick Siams</option>
                    <option>Dr. Julia Jameson</option>
                    <option>Dr. Amy Adams</option>
                    <option>Dr. Max Turner</option>
                    <option>Dr. Michael Linden</option>
                  </select>
                </div>
                <div className="col-span-full sm:col-span-3">
                  <input
                    {...register("name")}
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-2  bg-blue-900 bg-opacity-50  border border-white"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <input
                    {...register("phone")}
                    type="number"
                    placeholder="Phone"
                    className="w-full p-2   bg-blue-900 bg-opacity-50 border text-white "
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <input
                    {...register("email")}
                    type="text"
                    placeholder="Email"
                    className="w-full p-2 bg-blue-900 bg-opacity-50 border text-white "
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <input
                    {...register("date")}
                    type="date"
                    placeholder=""
                    className="w-full p-2 bg-blue-900 bg-opacity-50 border text-white "
                  />
                </div>
                <div className=" ml-32 lg:ml-0">
                <button type="submit" className="btn mx-auto flex justify-center border-white bg-blue-900 bg-opacity-50 text-white  rounded-none btn-outline lg:w-64 ">
                  Make An Appointment
                </button>
                </div>
              </form>
              
            </div>
            
          </fieldset>

          {/* faq */}
          <section className="dark:bg-gray-100 border pt-4 w-full  dark:text-gray-800">
            <div className="container flex flex-col justify-center mx-auto ">
              <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
                FAQ
              </p>
              <h2 className="mb-8  text-4xl font-bold leading-none text-center sm:text-3xl">
                Have some Questions?
              </h2>
              <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 dark:divide-gray-300">
                <details open="">
                  <summary className="py-2 outline-none cursor-pointer focus:underline">
                    What are your regular office hour?
                  </summary>
                  <div className="px-4 pb-4">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Unde neque in fugiat magni, quas animi enim veritatis
                      deleniti ex. Impedit.
                    </p>
                  </div>
                </details>
                <details open="">
                  <summary className="py-2 outline-none cursor-pointer focus:underline">
                    What is your appointment policy?
                  </summary>
                  <div className="px-4 pb-4">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Est aspernatur quae, eos explicabo odit minima libero
                      veniam similique quibusdam doloribus facilis ipsa
                      accusantium vel maiores corrupti! Libero voluptate a
                      doloribus?
                    </p>
                  </div>
                </details>
                <details>
                  <summary className="py-2 outline-none cursor-pointer focus:underline">
                    What should I do if I am ill?
                  </summary>
                  <div className="px-4 pb-4 space-y-2">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ut voluptates aspernatur dolores in consequatur doloremque
                      inventore reprehenderit, consequuntur perspiciatis
                      architecto.
                    </p>
                    <p>
                      Sed consectetur quod tenetur! Voluptatibus culpa incidunt
                      veritatis velit quasi cupiditate unde eaque! Iure,
                      voluptatibus autem eaque unde possimus quae.
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Faq;
