import { useEffect, useState } from "react";

const PopularCamps = () => {
  const [camps, setCamps] = useState([]);
  const sixCamps = camps.slice(0, 6);
  console.log(sixCamps);

  useEffect(() => {
    fetch("camps.json")
      .then((res) => res.json())
      .then((data) => {
        setCamps(data);
      });
  }, []);

  return (
    <div className="container mx-auto my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pl-4 border ">
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
              </div>
              <button
                type="button"
                className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50"
              >
                Read more
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PopularCamps;
