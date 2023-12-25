import React, { useState, useEffect } from "react";
import FeatherIcon from "feather-icons-react";
import { NavLink } from "react-router-dom";
import axios from "axios";

const EditBlog = () => {
  const [getuserdata, setUserdata] = useState([]);
  const [deltedata, setdeltedata] = useState("");
  console.log(deltedata);
  console.log(getuserdata);

  const getdata = async () => {
    const res = await fetch("http://localhost:8000/api/getdata", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      console.log("error ");
    } else {
      setUserdata(data);
      console.log("get data");
    }
  };

  useEffect(() => {
    getdata();
  }, []);
 const deleteuser = async (id) => {
   const deleteres = await axios({
     method: "delete",
     url: `http://localhost:8000/api/deletedata/${id}`,
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

  return (
    <div className="bgwhite border-d mtpx9 cust-scroll p20">
      <h6 className="fsize20 textprimary mtpx1 mbpx1 font-600">
        Edit Blogs
      </h6>
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
                <p>Image</p>
              </th>
              <th className="fsize13 w-20 textwhite font-300">
                <p>Title</p>
              </th>
              <th className="fsize13 w-10 textwhite font-300">
                <p>Description</p>
              </th>
              <th className="fsize13 w-20 textwhite font-300">
                <p>Category</p>
              </th>
              <th className="fsize13 w-20 textwhite font-300">
                <p>Created Date</p>
              </th>
              <th className="fsize13 w-10 textwhite font-300">
                <p>Action</p>
              </th>
            </tr>
          </thead>
          <tbody>
            {getuserdata.map((e, id) => {
              return (
                <>
                  <tr>
                    <td className="fsize13 w-10 textforth">
                      <img
                        src={e.img}
                        alt="logo"
                        className="edit-img bg-light-primary rounded-5 object-contain"
                      />
                    </td>
                    <td className="fsize13 w-20 textforth">
                      <p>{e.title}</p>
                    </td>
                    <td className="fsize13 w-20 textforth">
                      <p className="line-clamp2">{e.desc}</p>
                    </td>
                    <td className="w-10 textforth">
                      <p className="prpx15 plpx15 ptpx3 pbpx3 fsize12 rounded-20 textprimary bg-light-primary w-max">
                        {e.category}
                      </p>
                    </td>
                    <td className="fsize12 w-20 textforth">
                      <p>{new Date(e.createdAt).toDateString()}</p>
                    </td>
                    <td className="fsize13 w-10 textforth plpx15">
                      <div className="flex items-center gap-5">
                        <NavLink className="mtpx7" to={`/update/${e._id}`}>
                          <FeatherIcon
                            icon="edit"
                            className="textgray cursor-pointer"
                            size={16}
                          />
                        </NavLink>
                        <FeatherIcon
                          onClick={() => deleteuser(e._id)}
                          icon="trash"
                          className="textgray cursor-pointer"
                          size={16}
                        />
                      </div>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EditBlog;
