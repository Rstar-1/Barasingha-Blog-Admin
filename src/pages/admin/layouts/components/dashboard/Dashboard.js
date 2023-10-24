import React from "react";
import Logo from "../../../../../assets/download.png";
import FeatherIcon from "feather-icons-react";

const Dashboard = () => {
  return (
    <div className="bgwhite border-d mtpx12 p30">
      <div className="mtpx10 grid-cols-4 gap-12">
        <div className="d-shadow rounded-10 p25 flex items-center gap-10">
          <img src={Logo} alt="logo" className="dash-logo" />
          <div>
            <p className="texttertiary fsize13 font-500 mtpx1 mbpx1">
              Welcome Back
            </p>
            <h3 className="fsize25 font-600 mtpx1 leading mbpx1">33</h3>
          </div>
        </div>
        <div className="d-shadow rounded-10 p25 flex items-center gap-10">
          <img src={Logo} alt="logo" className="dash-logo" />
          <div>
            <p className="texttertiary fsize13 font-500 mtpx1 mbpx1">
              Welcome Back
            </p>
            <h3 className="fsize25 font-600 mtpx1 leading mbpx1">33</h3>
          </div>
        </div>
        <div className="d-shadow rounded-10 p25 flex items-center gap-10">
          <img src={Logo} alt="logo" className="dash-logo" />
          <div>
            <p className="texttertiary fsize13 font-500 mtpx1 mbpx1">
              Welcome Back
            </p>
            <h3 className="fsize25 font-600 mtpx1 leading mbpx1">33</h3>
          </div>
        </div>
        <div className="d-shadow rounded-10 p25 flex items-center gap-10">
          <img src={Logo} alt="logo" className="dash-logo" />
          <div>
            <p className="texttertiary fsize13 font-500 mtpx1 mbpx1">
              Welcome Back
            </p>
            <h3 className="fsize25 font-600 mtpx1 leading mbpx1">33</h3>
          </div>
        </div>
      </div>
      <div className="mtpx18 flex gap-12 mtpx25">
        <div className="w-40">
          <h2 className="fsize15 mtpx3 pbpx3 bordb textgray fontt-400">
            Know More
          </h2>
          <div className="d-shadow mtpx16 rounded-10 p20">
            <h4 className="fsize15 textsecondary mtpx1 mbpx1">About Us</h4>
            <p className="fsize12 texttertiary text-justify mtpx4 mbpx1">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual content.
            </p>
            <img
              src="https://nexuscluster.blob.core.windows.net/server01/HOMECLIQ/multipleImage/poster-FZS682kyRPvBUM2gmdHQt-1697720366"
              alt="dash"
              className="bg-ec mtpx15 mbpx6 dash-images"
            />
            <div className="flex items-center mtpx10 gap-10">
              <button className="border-0 cursor-pointer font-500 textwhite rounded-5 ptpx8 pbpx8 w-full fsize14 bgsecondary">
                About
              </button>
              <button className="cursor-pointer font-500 bgp-outline rounded-5 ptpx8 pbpx8 w-full fsize14">
                Ecommerce
              </button>
            </div>
          </div>
        </div>
        <div className="w-60">
          <h2 className="fsize15 mtpx3 pbpx3 bordb textgray fontt-400">
            Quality Assurance
          </h2>
          <div className=" cust-scroll plpx5 prpx10 ptpx5 pbpx5">
            <div className="grid-cols-2 gap-12">
              <div className="d-shadow rounded-10 p20">
                <div className="flex justify-between items-center">
                  <h4 className="fsize15 textforth mtpx1 mbpx1">Content</h4>
                  <div className="next flex justify-center items-center">
                    <FeatherIcon
                      icon="chevron-right"
                      className="textgray cursor-pointer"
                      size={14}
                    />
                  </div>
                </div>
                <div className="grid-cols-1 mtpx6 gap-10">
                  <div className="">
                    <h5 className="fsize13 textsecondary mtpx1 mbpx1">
                      Blog Admin
                    </h5>
                    <p className="fsize12 textprimary text-justify mtpx1 mbpx1">
                      https://homecliq.aiab.in/
                    </p>
                  </div>
                  <div className="">
                    <h5 className="fsize13 textsecondary mtpx1 mbpx1">
                      Elearning Admin
                    </h5>
                    <p className="fsize12 textprimary text-justify mtpx1 mbpx1">
                      https://homecliq.aiab.in/
                    </p>
                  </div>
                  <div className="">
                    <h5 className="fsize13 textsecondary mtpx1 mbpx1">
                      Ecommerce Admin
                    </h5>
                    <p className="fsize12 textprimary text-justify mtpx1 mbpx1">
                      https://homecliq.aiab.in/
                    </p>
                  </div>
                </div>
              </div>
              <div className="d-shadow rounded-10 p20">
                <div className="flex justify-between items-center">
                  <h4 className="fsize15 textforth mtpx1 mbpx1">Content</h4>
                  <div className="next flex justify-center items-center">
                    <FeatherIcon
                      icon="chevron-right"
                      className="textgray cursor-pointer"
                      size={14}
                    />
                  </div>
                </div>
                <div className="grid-cols-1 mtpx6 gap-10">
                  <div className="">
                    <h5 className="fsize13 textsecondary mtpx1 mbpx1">
                      Blog Password
                    </h5>
                    <p className="fsize12 textprimary text-justify mtpx1 mbpx1">
                      fgdgfdgdfgfjed
                    </p>
                  </div>
                  <div className="">
                    <h5 className="fsize13 textsecondary mtpx1 mbpx1">
                      Elearning Password
                    </h5>
                    <p className="fsize12 textprimary text-justify mtpx1 mbpx1">
                      dopjsnsddfdv
                    </p>
                  </div>
                  <div className="">
                    <h5 className="fsize13 textsecondary mtpx1 mbpx1">
                      Ecommerce Password
                    </h5>
                    <p className="fsize12 textprimary text-justify mtpx1 mbpx1">
                      pqjkcbnchddmdxds
                    </p>
                  </div>
                </div>
              </div>
              <div className="d-shadow rounded-10 p20">
                <div className="flex justify-between items-center">
                  <h4 className="fsize15 textforth mtpx1 mbpx1">Content</h4>
                  <div className="next flex justify-center items-center">
                    <FeatherIcon
                      icon="chevron-right"
                      className="textgray cursor-pointer"
                      size={14}
                    />
                  </div>
                </div>
                <div className="mtpx6 flex items-center gap-12">
                  <img src={Logo} alt="logo" className="dash2-logo" />
                  <div>
                    <p className="texttertiary fsize13 font-500 mtpx1 mbpx1">
                      User Interfacce
                    </p>
                    <input type="range" />
                  </div>
                </div>
                <div className="flex items-center gap-12 mtpx8">
                  <img src={Logo} alt="logo" className="dash2-logo" />
                  <div>
                    <p className="texttertiary fsize13 font-500 mtpx1 mbpx1">
                      User Interfacce
                    </p>
                    <input type="range" />
                  </div>
                </div>
                <div className="flex items-center gap-12 mtpx8">
                  <img src={Logo} alt="logo" className="dash2-logo" />
                  <div>
                    <p className="texttertiary fsize13 font-500 mtpx1 mbpx1">
                      User Interfacce
                    </p>
                    <input type="range" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
