import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Footer} from "../components/index";

const Layout = () => {
  return (
    <div className="h-screen flex flex-col">
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  );
};

export default Layout;