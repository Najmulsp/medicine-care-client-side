import { useEffect, useState } from "react";
import { FaArrowRightLong, FaLocationDot } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa";
import { LuLayoutPanelTop } from "react-icons/lu";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";



const AvailableCamps = () => {
  // const [camps, setCamps] = useState([]);
  const axiosPublic = useAxiosPublic();
  const [layoutMode, setLayoutMode] = useState("3card");
  // const [search, setSearch] = useState("");

  

  // useEffect(()=>{
  //   axiosPublic.get(`/needPosts?search=${search}`)
  //   .then(data => {    
  //     setVolunteers(data.data)
  //   })
  // }, [search])

  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   const search = e.target.search.value;

  //   setSearch(search);
  // };

  // useEffect(() => {
  //   fetch("http://localhost:5000/popularCamps")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setCamps(data);
  //     });
  // }, []);
  const {data: camps = [] } = useQuery({
    queryKey: ['camp'],
    queryFn: async () =>{
      const res = await axiosPublic.get('/popularCamps');
      return res.data
    }
  })




   // Function to toggle layout mode
   const toggleLayout = () => {
    setLayoutMode((prevMode) => (prevMode === "3card" ? "2card" : "3card"));
  };


  return (
    <div className="pt-20">
      <div className="flex items-center gap-10">
        {/* search field */}
        <fieldset className="w-5/12 mx-auto py-6 space-y-1 dark:text-gray-800">
          <label htmlFor="Search" className="hidden">
            Search
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <button
              // onClick={handleSearch}
                type="button"
                title="search"
                className="p-1 focus:outline-none focus:ring"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  className="w-4 h-4 dark:text-gray-800"
                >
                  <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                </svg>
              </button>
            </span>
            <input
              type="search"
              name="Search"
              placeholder="Search..."
              className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-blue-200 dark:text-gray-800 focus:dark:bg-gray-50 focus:dark:border-violet-600"
            />
          </div>
        </fieldset>
        {/* sort field */}
        <fieldset className="w-3/12 space-y-1 dark:text-gray-800">
          <details className="dropdown">
            <summary className="m-1 btn bg-gradient-to-r from-sky-400 via-sky-500 to-sky-700 hover:bg-gradient-to-br focus:ring-purple-300">Sort By <FaAngleDown /></summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
              <li>
                <a>Most Registered</a>
              </li>
              <li>
                <a>Camp Fees</a>
              </li>
              <li>
                <a>By Name</a>
              </li>
            </ul>
          </details>
        </fieldset>
        {/* change layout */}
        <button onClick={toggleLayout} className="btn  mx-auto bg-gradient-to-r from-sky-500 via-sky-400 to-sky-700 hover:bg-gradient-to-br focus:ring-purple-300"><LuLayoutPanelTop className="text-cyan-200"/>
          Change Layout
        </button>
      </div>
      {layoutMode === "3card" ? (
      <div className="container mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pl-4 border ">
        {camps?.map((camp) => (
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
      ) : (
        <div className="container mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:pl-20 border ">
        {camps?.map((camp) => (
          <div key={camp._id}>
            <div className="max-w-lg  shadow-md dark:bg-gray-50 dark:text-gray-800">
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
        )}
    </div>
  );
};

export default AvailableCamps;
