import { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const PopularCamps = () => {
  const [camps, setCamps] = useState([]);
  const axiosPublic = useAxiosPublic();
  const sixCamps = camps.slice(0, 6);
  // console.log(sixCamps);

  useEffect(() => {
    axiosPublic.get("/popularCamps")
      .then((res) => {
        setCamps(res.data);
      });
  }, [axiosPublic]);

  return (
    <div className="my-10">
      <div className="container mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pl-4 border ">
        {sixCamps?.map((camp) => (
          <div key={camp._id}>
            <div className="max-w-sm  shadow-md dark:bg-gray-50 dark:text-gray-800">
              <img
                src={camp.image}
                alt=""
                className="object-cover object-center w-full h-72 dark:bg-gray-500"
              />
              <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                  <h2 className="text-3xl font-semibold tracking-wide">
                    {camp.name}
                  </h2>
                  <p className="dark:text-gray-800">
                    Curabitur luctus erat nunc, sed ullamcorper erat vestibulum
                    eget.
                  </p>
                  <div className="flex justify-between items-center">
                    <p>Date: {camp.date}</p>
                    <p>Fees: {camp.fees}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="flex items-center gap-1">
                    <FaLocationDot className="text-cyan-400" /> {camp.location}
                  </p>
                  <Link to={`/campDetails/${camp._id}`}>
                  <button className="btn bg-gradient-to-r from-sky-500 via-sky-400 to-sky-700 hover:bg-gradient-to-br focus:ring-purple-300">
                    Details <FaArrowRightLong />
                  </button></Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <Link to="/availableCamps">
        <button className="btn w-32 mx-auto bg-gradient-to-r from-sky-400 via-sky-600 to-sky-700 hover:bg-gradient-to-br focus:ring-purple-300">
          See All Camps
        </button></Link>
      </div>
    </div>
  );
};

export default PopularCamps;
