import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../authentication/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  const handleTheme = (e) => {
    if (e.target.checked) {
      setTheme("synthwave");
    } else {
      setTheme("light");
    }
  };
  const handleLogout = () => {
    logout();
    toast("You have successfully logged out");
  };
  const navlinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/availableCamps">Available Camps</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar fixed z-10 bg-opacity-40 bg-gray-900 text-white max-w-screen-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navlinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Medicine Care</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navlinks}
          </ul>
        </div>
        <div className="navbar-end gap-6">
          <label className="cursor-pointer grid place-items-center">
            <input
              onChange={handleTheme}
              type="checkbox"
              value=""
              checked={theme === "light" ? false : true}
              className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
            />
            <svg
              className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <svg
              className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
          {user ? (
            <div id="profileImg">
              <div className="dropdown dropdown-hover dropdown-end">
                <div tabIndex={0} role="button">
                  <img
                    className="w-12 md:w-12 lg:w-14  rounded-full "
                    alt="profile picture"
                    src={
                      user?.photoURL ||
                      "https://i.ibb.co/RPpmvwb/images-blank-profile.png"
                    }
                  />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li className="text-center">
                  <h1 className="p-2 btn text-white  bg-purple-400 dark:bg-gradient-to-r from-sky-600 via-cyan-400 to-sky-700 rounded-lg  font-semibold  w-full">
                {user.displayName || "user name not found"}
              </h1>
                  </li>
                  <li className=" ">
                    <Link to="dashboard/analytics" className="p-2 btn text-white bg-purple-400 dark:bg-gradient-to-r from-sky-600 via-cyan-400 to-sky-700 rounded-lg  font-semibold  w-full">Dashboard</Link>
                  </li>
                  <li>
                  <button
                onClick={handleLogout}
                className="btn w-full text-white bg-yellow-600 dark:bg-gradient-to-r from-sky-600 via-cyan-400 to-sky-700 hover:bg-gradient-to-br focus:ring-purple-300"
              >
                Log Out
              </button>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <Link
              className="btn px-6 bg-gradient-to-r from-sky-400 via-sky-600 to-sky-700 hover:bg-gradient-to-br focus:ring-purple-300"
              to="/login"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
