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
        <div className="w-30">
          <h2 className="fsize15 mtpx3 pbpx3 bordb textgray fontt-400">
            Blog UI
          </h2>
          <div className="d-shadow mtpx16 rounded-10 p13">
            <img
              src="https://nexuscluster.blob.core.windows.net/server01/HOMECLIQ/multipleImage/poster-FZS682kyRPvBUM2gmdHQt-1697720366"
              alt="dash"
              className="bg-ec rounded-10 mbpx6 dash-images"
            />
            <h4 className="fsize15 textsecondary mtpx1 mbpx1">About Us</h4>
            <p className="fsize12 textforth text-justify mtpx4 mbpx1">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual content.
            </p>
            <div className="flex justify-end">
              <p className="fsize12 textsecondary text-justify mtpx4 mbpx1">
                12/2/2023
              </p>
            </div>
          </div>
        </div>
        <div className="w-70">
          <h2 className="fsize15 mtpx3 pbpx3 bordb textgray fontt-400">
            Quality Assurance
          </h2>
          <div className="mtpx10 rounded-10 border-ec p20">
            <table>
              <thead>
                <tr>
                  <th className="fsize13 textforth">
                    <p>First Name</p>
                  </th>
                  <th className="fsize13 textforth">
                    <p>Last Name</p>
                  </th>
                  <th className="fsize13 textforth">
                    <p>Email</p>
                  </th>
                  <th className="fsize13 textforth">
                    <p>Role</p>
                  </th>
                  <th className="fsize13 textforth">
                    <p>Actions</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="fsize13 textforth">
                    <p>Raj</p>
                  </td>
                  <td className="fsize13 textforth">
                    <p>Shetye</p>
                  </td>
                  <td className="fsize13 textforth">
                    <p>abcd@gmail.com</p>
                  </td>
                  <td className="fsize13 textsuccess">
                    <p>Admin</p>
                  </td>
                  <td className="fsize13 textforth">
                    <FeatherIcon
                      icon="edit"
                      className="textgray cursor-pointer"
                      size={15}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="fsize13 textforth">
                    <p>Aman</p>
                  </td>
                  <td className="fsize13 textforth">
                    <p>Shukla</p>
                  </td>
                  <td className="fsize13 textforth">
                    <p>abcd@gmail.com</p>
                  </td>
                  <td className="fsize13 textforth">
                    <p>Member</p>
                  </td>
                  <td className="fsize13 textforth">
                    <FeatherIcon
                      icon="edit"
                      className="textgray cursor-pointer"
                      size={15}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="fsize13 textforth">
                    <p>Aman</p>
                  </td>
                  <td className="fsize13 textforth">
                    <p>Shukla</p>
                  </td>
                  <td className="fsize13 textforth">
                    <p>abcd@gmail.com</p>
                  </td>
                  <td className="fsize13 textforth">
                    <p>Member</p>
                  </td>
                  <td className="fsize13 textforth">
                    <FeatherIcon
                      icon="edit"
                      className="textgray cursor-pointer"
                      size={15}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="fsize13 textforth">
                    <p>Aman</p>
                  </td>
                  <td className="fsize13 textforth">
                    <p>Shukla</p>
                  </td>
                  <td className="fsize13 textforth">
                    <p>abcd@gmail.com</p>
                  </td>
                  <td className="fsize13 textforth">
                    <p>Member</p>
                  </td>
                  <td className="fsize13 textforth">
                    <FeatherIcon
                      icon="edit"
                      className="textgray cursor-pointer"
                      size={15}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="fsize13 textforth">
                    <p>Aman</p>
                  </td>
                  <td className="fsize13 textforth">
                    <p>Shukla</p>
                  </td>
                  <td className="fsize13 textforth">
                    <p>abcd@gmail.com</p>
                  </td>
                  <td className="fsize13 textforth">
                    <p>Member</p>
                  </td>
                  <td className="fsize13 textforth">
                    <FeatherIcon
                      icon="edit"
                      className="textgray cursor-pointer"
                      size={15}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="fsize13 textforth">
                    <p>Aman</p>
                  </td>
                  <td className="fsize13 textforth">
                    <p>Shukla</p>
                  </td>
                  <td className="fsize13 textforth">
                    <p>abcd@gmail.com</p>
                  </td>
                  <td className="fsize13 textforth">
                    <p>Member</p>
                  </td>
                  <td className="fsize13 textforth">
                    <FeatherIcon
                      icon="edit"
                      className="textgray cursor-pointer"
                      size={15}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="fsize13 textforth">
                    <p>Aman</p>
                  </td>
                  <td className="fsize13 textforth">
                    <p>Shukla</p>
                  </td>
                  <td className="fsize13 textforth">
                    <p>abcd@gmail.com</p>
                  </td>
                  <td className="fsize13 textforth">
                    <p>Member</p>
                  </td>
                  <td className="fsize13 textforth">
                    <FeatherIcon
                      icon="edit"
                      className="textgray cursor-pointer"
                      size={15}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
