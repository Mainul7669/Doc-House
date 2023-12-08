
const DashboardNavbar = () => {
  return (
    <div>


      <div className="drawer lg:drawer-open z-[9999]">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center absolute right-3 bottom-2 ">
          {/* Page content here */}
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-2"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-[#FFFFFF] font-semibold text-lg text-[#898989]">
            {/* Sidebar content here */}
            {/* For users */}
            <li>
              <a>My Appointments</a>
            </li>
            <li>
              <a>My Reviews</a>
            </li>
            <li>
              <a>My History</a>
            </li>
            <li>
              <a>Home</a>
            </li>

            {/* For admin */}

            <li>
              <a>Dashboard</a>
            </li>
            <li>
              <a>All Users</a>
            </li>
            <li>
              <a>Add a Doctor</a>
            </li>
            <li>
              <a>Manage Doctors</a>
            </li>
            <li>
              <a>Home</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
