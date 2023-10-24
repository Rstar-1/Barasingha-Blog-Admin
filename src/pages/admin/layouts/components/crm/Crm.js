import React from "react";
import FeatherIcon from "feather-icons-react";
import Select from "react-select";

const Crm = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <div className="bgwhite border-d mtpx12 crm-h p20">
      <div className="">
        <h6 className="fsize20 textsecondary mtpx1 mbpx1 font-600">
          Customer relationship management (CRM)
        </h6>
        <div className="mtpx18 rounded-10 border-ec p20">
          <div className="mtpx5 mbpx15 flex gap-12 items-center">
            <div className="w-60">
              <div className="relative">
                <input
                  className="w-full h-search fsize14 rounded-5 plpx10 border-ec"
                  placeholder="Search"
                />
                <div className="absolute top-0 right-0 mtpx9 mrpx2">
                  <FeatherIcon
                    icon="search"
                    className="textgray cursor-pointer"
                    size={20}
                  />
                </div>
              </div>
            </div>
            <div className="w-40 mlpx15">
              <Select
                className="w-full fsize14"
                placeholder="Role"
                options={options}
              />
            </div>
          </div>
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
  );  
};

export default Crm;
