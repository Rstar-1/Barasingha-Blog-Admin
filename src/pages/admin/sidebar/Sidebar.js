import React from "react";
import FeatherIcon from "feather-icons-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const sidebarmenu = [
    {
      id: 1,
      name: "Dashboard",
      icon: "grid",
      route: "dashboard",
    },
    {
      id: 2,
      name: "CRM",
      icon: "user",
      route: "crm",
    },
    {
      id: 3,
      name: "Blog",
      icon: "folder",
      route: "blogs",
    },
    {
      id: 4,
      name: "Elearning",
      icon: "video",
      route: "elearning",
    },
    {
      id: 5,
      name: "Ecommerce",
      icon: "shopping-cart",
      route: "ecommerce",
    },
    {
      id: 6,
      name: "Cms",
      icon: "file",
      route: "cms",
    },
    {
      id: 7,
      name: "Seo",
      icon: "search",
      route: "seo",
    },
    {
      id: 8,
      name: "Billing",
      icon: "book",
      route: "billing",
    },
    {
      id: 9,
      name: "Get the App",
      icon: "tablet",
      route: "getapp",
    },
  ];
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
          {sidebarmenu.map((e) => (
            <NavLink
              activeClassName="active"
              className="flex items-center textsidebar pbpx7 gap-9"
              to={e.route}
            >
              <FeatherIcon
                icon={e.icon}
                className=" cursor-pointer"
                size={16}
              />
              <p className="fsize14  mtpx2 font-300">{e.name}</p>
            </NavLink>
          ))}
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
