import { useEffect, useState } from "react";
import { FaArrowRightLong, FaLocationDot } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa";
import { LuLayoutPanelTop } from "react-icons/lu";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const AvailableCamps = () => {
  const axiosPublic = useAxiosPublic();
  const [layoutMode, setLayoutMode] = useState("3card");
  const [search, setSearch] = useState("");
  const [camps, setCamps] = useState([]);

  // const {data: camps = [] } = useQuery({
  //   queryKey: ['camp'],
  //   queryFn: async () =>{
  //     const res = await axiosPublic.get('/popularCamps');
  //     return res.data
  //   }
  // })

  useEffect(() => {
    axiosPublic.get("/popularCamps")
    .then((res) => {
      // console.log(res.data)
      setCamps(res.data);
    });
  }, [axiosPublic]);

  // search functionality
  useEffect(() => {
    axiosPublic.get(`/popularCampsSearch?search=${search}`)
    .then((res) => {
      // console.log(res.data)
      setCamps(res.data);
    });
  }, [axiosPublic, search]);

  const handleSearch = (e) => {
    e.preventDefault();
    const search = e.target.search.value;
    // console.log(search);
    setSearch(search);
  };

  // Function to toggle layout mode
  const toggleLayout = () => {
    setLayoutMode((prevMode) => (prevMode === "3card" ? "2card" : "3card"));
  };

              // sort functionality
    // const [sort, setSort] = useState('1')

    //   useEffect( () => {
    //     axiosPublic.get(`/sort?sort=${sort}`)
    //       .then(res=> {
    //         setCamps(res.data)
    //       })  
    //           }, [axiosPublic, sort] )

  return (
    <div className="pt-20">
      <div className="flex items-center gap-10">
        {/* search field */}
    <form
    onSubmit={handleSearch}
    className="flex flex-row w-5/12 mx-auto py-6  dark:text-gray-800">
			<input type="text" name="search" placeholder="Search by name" className="w-3/5 p-3 rounded-l-lg sm:w-2/3 border" />
			<button type="submit" className="w-2/5 border p-3 font-semibold rounded-r-lg sm:w-1/3 bg-sky-600 dark:text-gray-50 flex justify-center items-center">
      <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-6 h-4 opacity-40 text-black"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
      Search
      </button>
		</form>

        {/* sort field */}
        {/* <fieldset className="w-3/12 space-y-1 dark:text-gray-800">
          <details className="dropdown">
            <summary
            // onChange={e =>{
            //   setSort(e.target.value)
            // }}
            // value={sort}
            className="m-1 btn text-black bg-gradient-to-r from-sky-400 via-sky-500 to-sky-700 hover:bg-gradient-to-br focus:ring-purple-300">
              Sort By <FaAngleDown />
            </summary>
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
        </fieldset> */}
        {/* change layout */}
        <button
          onClick={toggleLayout}
          className="btn  mx-auto text-black bg-gradient-to-r from-sky-500 via-sky-400 to-sky-700 hover:bg-gradient-to-br focus:ring-purple-300"
        >
          <LuLayoutPanelTop className="text-black" />
          Change Layout
        </button>
      </div>
      {layoutMode === "3card" ? (
        <div className="container mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pl-4">
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
                      Curabitur luctus erat nunc, sed ullamcorper erat
                      vestibulum eget.
                    </p>
                    <div className="flex justify-between items-center">
                      <p>Date: {camp.date}</p>
                      <p>Fees: {camp.fees}</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="flex items-center gap-1">
                      <FaLocationDot className="text-cyan-400" />{" "}
                      {camp.location}
                    </p>
                    <Link to={`/campDetails/${camp._id}`}>
                      <button className="btn text-white bg-gradient-to-r from-sky-500 via-sky-400 to-sky-700 hover:bg-gradient-to-br focus:ring-purple-300">
                        Details <FaArrowRightLong />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="container mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:pl-20">
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
                      Curabitur luctus erat nunc, sed ullamcorper erat
                      vestibulum eget.
                    </p>
                    <div className="flex justify-between items-center">
                      <p>Date: {camp.date}</p>
                      <p>Fees: {camp.fees}</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="flex items-center gap-1">
                      <FaLocationDot className="text-cyan-400" />{" "}
                      {camp.location}
                    </p>
                    <Link to={`/campDetails/${camp._id}`}>
                      <button className="btn bg-gradient-to-r from-sky-500 via-sky-400 to-sky-700 hover:bg-gradient-to-br focus:ring-purple-300">
                        Details <FaArrowRightLong />
                      </button>
                    </Link>
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
