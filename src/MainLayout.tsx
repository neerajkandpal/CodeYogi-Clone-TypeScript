import React from "react";
import SideBar from "./Sidebar";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="flex items-stretch min-h-screen justify-center">
      <SideBar />
      <div className="bg-white grow pt-2 px-8 ml-60">
        <Outlet />
      </div>
    </div>
  );
}
export default MainLayout;
