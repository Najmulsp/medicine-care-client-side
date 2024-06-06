import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex border border-pink-600">
      {/* sidebar */}
      <div className="drawer w-1/5 lg:drawer-open border border-green-600">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn bg-gradient-to-r from-sky-600 via-cyan-400 to-sky-700 rounded-lg  drawer-button lg:hidden"
          >
            Open sidebar
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 space-y-2 w-80 min-h-full bg-cyan-100 text-base-content">
            {/* Sidebar content here */}
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
          </ul>
        </div>
      </div>
                    {/* content */}
        <div className="flex-1 bg-blue-100 w-full mx-auto border">
            <Outlet></Outlet>
        </div>
    </div>
  );
};

export default Dashboard;
