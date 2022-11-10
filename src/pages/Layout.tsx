import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../components/layout/index";
import SEO from "../components/SEO";

const Layout = () => {
  return (
    <div className="w-full bg-pink-200 h-screen flex flex-col">
      <SEO />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;