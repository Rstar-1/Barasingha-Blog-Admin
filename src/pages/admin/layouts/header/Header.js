import React from 'react';
import Logo from "../../../../assets/download.png";
import FeatherIcon from 'feather-icons-react';

const Header = () => {
  return (
    <div className="bgwhite border-h flex justify-between items-center p12">
      <div className="flex items-center gap-10">
        <img src={Logo} alt="logo" className="header-logo" />
        <div>
          <h1 className="fsize15 font-600 mtpx3 mbpx1">Super admin</h1>
          <p className="texttertiary fsize13 font-500 mtpx1 mbpx3">
            Welcome Back
          </p>
        </div>
      </div>
      <div className="flex gap-10 items-center">
        <FeatherIcon icon="calendar" className="textgray cursor-pointer" size={20} />
        <button className="border-0 cursor-pointer font-500 textwhite rounded-5 ptpx10 pbpx10 plpx25 prpx25 fsize14 bgsecondary">
          Logout
        </button>
      </div>
    </div>
  );
}

export default Header
