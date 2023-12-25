import React, { useState, useEffect } from "react";
import FeatherIcon from "feather-icons-react";
import AddCategory from "./components/AddCategory";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Category = () => {
  const [categorysidebar, setcategorysidebar] = useState(false);
  const [getuserdata, setUserdata] = useState([]);
  const [deltedata, setdeltedata] = useState("");
  console.log(deltedata);

  const getdata = async () => {
    const response = await axios({
      method: "get",
      url: "http://localhost:8000/api/blogcategoryalldata",
    });
    setUserdata(response.data);
  };
  const deleteuser = async (id) => {
    const deleteres = await axios({
      method: "delete",
      url: `http://localhost:8000/api/blogcategorydelete/${id}`,
    });
    setdeltedata(deleteres);
    console.log(deleteres, "delete");
     if (deleteres.status === 201) {
       alert("delete data");
       window.location.reload(true);
     } else {
       alert("Category Not Submitted");
     }
  };
  useEffect(() => {
    getdata();
  }, []);
  return (
    <div className="bgwhite border-d mtpx9 cust-scroll p20">
      {categorysidebar ? (
        <div className="bg-glass2 fixed top-0 right-0 h-100 w-full z-99">
          <div className="bgwhite d-shadow sidebar-w h-100 absolute right-0 top-0">
            <div className="bgprimary p5">
              <div className="flex items-center justify-between gap-4 plpx7 prpx7">
                <p className="fsize15 textwhite mtpx4 mbpx4 cursor-pointer font-500">
                  Add Category
                </p>
                <FeatherIcon
                  icon="x"
                  className="textwhite cursor-pointer"
                  size={17}
                  onClick={() => setcategorysidebar(false)}
                />
              </div>
            </div>
            <div className="p10 side-scroll">
              <AddCategory />
            </div>
          </div>
        </div>
      ) : null}
      <div className="flex justify-between items-center w-full">
        <div>
          <h6 className="fsize20 textprimary mtpx1 mbpx1 font-600">Category</h6>
          <p className="mtpx2 textgray fsize13">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to content.
          </p>
        </div>
        <div>
          <button
            onClick={() => setcategorysidebar(true)}
            className="border-0 cursor-pointer font-500 textwhite rounded-5 ptpx9 pbpx9 plpx25 prpx25 fsize14 bgprimary"
          >
            Add Category
          </button>
        </div>
      </div>

      <div className="mtpx18 rounded-10 border-ec p20">
        <div className="mtpx5 mbpx15 flex gap-12 items-center">
          <div className="w-60">
            <div className="relative">
              <input
                className="w-full h-input fsize14 rounded-5 plpx10 border-ec"
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
        </div>
        <table>
          <thead>
            <tr>
              <th className="fsize13 w-10 textwhite font-300">
                <p>ID</p>
              </th>
              <th className="fsize13 w-40 textwhite font-300">
                <p>Category Name</p>
              </th>
              <th className="fsize13 w-20 textwhite font-300">
                <p>Created Date</p>
              </th>
              <th className="fsize13 w-20 textwhite font-300">
                <p>Udated Date</p>
              </th>
              <th className="fsize13 w-10 textwhite font-300">
                <p>Actions</p>
              </th>
            </tr>
          </thead>
          <tbody>
            {getuserdata.map((e, id) => (
              <tr>
                <td className="fsize13 w-10 textforth">
                  <p>{id + 1}</p>
                </td>
                <td className="fsize13 w-40 textforth">
                  <p>{e.category}</p>
                </td>
                <td className="fsize13 w-20 textforth">
                  <p>{new Date(e.createdAt).toDateString()}</p>
                </td>
                <td className="fsize13 w-20 textforth">
                  <p>{new Date(e.updatedAt).toDateString()}</p>
                </td>
                <td className="fsize13 w-10 textforth plpx15">
                  <NavLink to={`/editcategory/${e._id}`}>
                    {" "}
                    <FeatherIcon
                      icon="edit"
                      className="textgray cursor-pointer"
                      size={16}
                    />
                  </NavLink>

                  <FeatherIcon
                    onClick={() => deleteuser(e._id)}
                    icon="trash"
                    className="textgray mlpx4 cursor-pointer"
                    size={16}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Category;
