import { FaLocationDot } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";
import { FaTruckMedical } from "react-icons/fa6";
import { TbMedicalCross } from "react-icons/tb";
import { LiaFileMedicalAltSolid } from "react-icons/lia";
import { GiMedicalDrip } from "react-icons/gi";


const CampDetails = () => {
  const camp = useLoaderData();
  console.log(camp);
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
              <Link to={`/popularCamps/${camp._id}`}>
                <button className="btn bg-gradient-to-r from-sky-500 via-sky-400 to-sky-700 hover:bg-gradient-to-br focus:ring-purple-300">
                  Join Camp
                  {/* Details <FaArrowRightLong /> */}
                </button>
              </Link>
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
                        <FaTruckMedical className="text-3xl"/>
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
                        <TbMedicalCross className="text-3xl"/>
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
                        <LiaFileMedicalAltSolid className="text-3xl"/>
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
                        <GiMedicalDrip className="text-3xl"/>
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
