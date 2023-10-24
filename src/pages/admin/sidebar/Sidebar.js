import React from "react";
import FeatherIcon from "feather-icons-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bgwhite h-100 relative">
      <div className="">
        <div className="flex justify-center w-full ptpx20 pbpx20">
          <img
            src="https://nexuscluster.blob.core.windows.net/server01/HOMECLIQ/multipleImage/poster-FZS682kyRPvBUM2gmdHQt-1697720366"
            alt="logo"
            className="sidebar-logo"
          />
        </div>
        <div className="ptpx10 pbpx10 plpx20 prpx20 grid grid-cols-1 gap-12">
          <p className="fsize15 font-600 textforth">Home</p>
          <NavLink
            activeClassName="active"
            className="flex items-center textsidebar pbpx7 gap-9"
            to="/"
          >
            <FeatherIcon icon="user" className=" cursor-pointer" size={16} />
            <p className="fsize14 mtpx1 font-300">Dashboard</p>
          </NavLink>
        </div>
        <div className="ptpx10 pbpx10 plpx20 prpx20 grid grid-cols-1 gap-12">
          <p className="fsize15 font-600 textforth">Blog Management</p>
          <NavLink
            activeClassName="active"
            className="flex items-center textsidebar pbpx7 gap-9"
            to="/add-category"
          >
            <FeatherIcon
              icon="user-plus"
              className=" cursor-pointer"
              size={16}
            />
            <p className="fsize14 mtpx1 font-300">Add Category</p>
          </NavLink>
          <NavLink
            activeClassName="active"
            className="flex items-center textsidebar pbpx7 gap-9"
            to="/add-blog"
          >
            <FeatherIcon
              icon="user-plus"
              className=" cursor-pointer"
              size={16}
            />
            <p className="fsize14 mtpx1 font-300">Add Blogs</p>
          </NavLink>
          <NavLink
            activeClassName="active"
            className="flex items-center textsidebar pbpx7 gap-9"
            to="/edit-blog"
          >
            <FeatherIcon
              icon="user-plus"
              className=" cursor-pointer"
              size={16}
            />
            <p className="fsize14 mtpx1 font-300">Edit Blogs</p>
          </NavLink>
          <NavLink
            activeClassName="active"
            className="flex items-center textsidebar pbpx7 gap-9"
            to="/status"
          >
            <FeatherIcon
              icon="user-plus"
              className=" cursor-pointer"
              size={16}
            />
            <p className="fsize14 mtpx1 font-300">Status</p>
          </NavLink>
        </div>
        <div className="ptpx10 pbpx10 plpx20 prpx20 grid grid-cols-1 gap-12">
          <p className="fsize15 font-600 textforth">Features</p>
          <NavLink
            activeClassName="active"
            className="flex items-center textsidebar pbpx7 gap-9"
            to="/variation"
          >
            <FeatherIcon icon="user" className=" cursor-pointer" size={16} />
            <p className="fsize14 mtpx1 font-300">Variation</p>
          </NavLink>
        </div>
      </div>
      <div className="absolute bottom-0 left-0">
        <div className="ptpx10 pbpx10 plpx20 prpx20 grid grid-cols-1 gap-12">
          <div className="flex items-center pbpx7 gap-9">
            <FeatherIcon
              icon="log-out"
              className="textgray cursor-pointer"
              size={16}
            />
            <p className="fsize14 textgray mtpx2 font-300">Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
