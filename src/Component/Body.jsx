import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-grow">
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
