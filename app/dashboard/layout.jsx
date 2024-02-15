"use client";

import PrivateRoute from "@app/Shared/PrivateRoute";
import DashboardNavbar from "@components/DashboardNavbar";
import { AuthContext } from "@components/providers/AuthProvider";
import { useContext } from "react";

const Layout = ({ children }) => {
  const { user, logout } = useContext(AuthContext);

  const handleLogOut = () => {
    logout()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <PrivateRoute>
      <div className="navbar bg-[#07332F] text-white">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Doc House</a>
          {/* <h1>{user.displayName}</h1> */}
        </div>
        <div className="lg:flex items-center hidden">

        {user ? ( 
        <>

          <button
            onClick={handleLogOut}
            className=" text-black bg-white btn-ghost p-2 font-semibold hover:text-white mr-2 lg:mr-4 rounded-lg"
          >
            Logout
          </button>

        <div className="lg:mr-2">
            <img className="w-16 rounded-xl" src={user?.photoURL} />
          </div>
          </>
       ) : (
        <>

        </>

       )}
        </div>
      </div>
      
      <div className="lg:flex gap-10  bg-[#F1F5F9]">
        <DashboardNavbar />
        <div className="mt-10">
          <main>{children}</main>
        </div>
      </div>
      </PrivateRoute>
    </div>
  );
};

export default Layout;
