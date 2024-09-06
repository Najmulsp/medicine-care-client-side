import { NavLink, Outlet } from "react-router-dom";
import useOrganizer from "../hooks/useOrganizer";

const Dashboard = () => {

  // todo: get isOrganizer value from the database;
  const [isOrganizer] = useOrganizer();

  return (
    <div className="flex ">
      {/* sidebar */}
      <div className="drawer  w-1/5 lg:drawer-open ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center absolute lg:static top-0 m-4 ">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn  bg-gradient-to-r from-sky-600 via-cyan-400 to-sky-700 rounded-lg  drawer-button lg:hidden"
          >
            Open Sidebar
          </label>
        </div>
        <div className="drawer-side z-10">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 pt-10  space-y-2 lg:w-80 min-h-screen bg-cyan-800 text-black">
            {/* Sidebar content here */}
            {
              isOrganizer?<>
              <li>
              <NavLink to="organizerProfile">Organizer Profile</NavLink>
            </li>
            <li>
            <NavLink to="addACamp">Add A Camp</NavLink>
            </li>
            <li>
            <NavLink to="manageCamps">Manage Camps</NavLink>
            </li>
            <li>
            <NavLink to="manageRegisterCamps">Manage Registered Camps</NavLink>
            </li>
            <li>
            <NavLink to="/">Home</NavLink>
            </li>
              </>
              :<>
              <li>
              <NavLink to="analytics">Analytics</NavLink>
            </li>
            <li>
            <NavLink to="participantProfile">Participant Profile</NavLink>
            </li>
            <li>
            <NavLink to="registerCamps"> Registered Camps</NavLink>
            </li>
            <li>
            <NavLink to="paymentHistory">Payment History</NavLink>
            </li>
            <li>
            <NavLink to="/">Home</NavLink>
            </li>
              </>
            }
          </ul>
        </div>
      </div>
                    {/* content */}
        <div className="flex-1 bg-cyan-600 w-full mx-auto border">
            <Outlet></Outlet>
        </div>
    </div>
  );
};

export default Dashboard;
