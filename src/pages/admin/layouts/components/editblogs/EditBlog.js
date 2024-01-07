import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import ReactPaginate from "react-paginate";
import FeatherIcon from "feather-icons-react";

const EditBlog = () => {
  // API UseState Data
  const [getuserdata, setUserdata] = useState([]);
  const [deltedata, setdeltedata] = useState("");
  console.log(deltedata);
  // Search UseState Data
  const [search, setsearchdata] = useState("");
  // Pagination UseState Data
  const [pageCount, setpageCount] = useState(0);
  const [offset, setOffset] = useState(0);

  // API Call
  const getdata = async () => {
    const payload = {};
    if (search) {
      Object.assign(payload, { search: search });
    }
    if (offset) {
      Object.assign(payload, { offset: offset });
    }
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:8000/api/getblogdata",
        data: payload, // Pass the payload as data in the POST request
      });

      setUserdata(response.data.data);
      setpageCount(Math.ceil(response.data.totalCount / 4));
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle the error as needed
    }
  };
  const deleteuser = async (id) => {
    const deleteres = await axios({
      method: "delete",
      url: `http://localhost:8000/api/deleteblogdata/${id}`,
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

  // Function
  const handlePageClick = (event) => {
    console.log(event, "handle");
    let page = event.selected + 1;
    const curoffset = page > 1 ? (page - 1) * 4 : 0;
    setOffset(curoffset);

    getdata();
  };
  const statustrue = async (e) => {
    const payload = {
      status: false,
    };
    const editresponse = await axios({
      method: "patch",
      url: `http://localhost:8000/api/updatebasicdata/${e}`,
      data: payload,
    });
    //setupdate(editresponse);
    if (editresponse.status === 201) {
      window.location.reload(true);
    } else {
      alert("Category Not Submitted");
    }
  };
  const statusfalse = async (e) => {
    const payload = {
      status: true,
    };
    const editresponse = await axios({
      method: "patch",
      url: `http://localhost:8000/api/updatebasicdata/${e}`,
      data: payload,
    });
    //setupdate(editresponse);
    if (editresponse.status === 201) {
      window.location.reload(true);
    } else {
      alert("Category Not Submitted");
    }
  };

  // Render API
  useEffect(() => {
    getdata();
  }, [search]);

  return (
    <div className="bgwhite border-d mtpx9 cust-scroll p20">
      <h6 className="fsize20 textprimary mtpx1 mbpx1 font-600">Edit Blogs</h6>
      <div className="mtpx18 rounded-10 border-ec p20">
        <div className="mtpx5 mbpx15 flex gap-12 items-center">
          <div className="w-60">
            <div className="relative">
              <input
                className="w-full h-input fsize14 rounded-5 plpx10 border-ec"
                placeholder="Search"
                onChange={(e) => setsearchdata(e.target.value)}
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
                        src={e.picture}
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
        <div className="flex w-full justify-end">
          <ReactPaginate
            className="pagination"
            breakLabel="..."
            nextLabel=">"
            previousLabel="<"
            pageCount={pageCount}
            onPageChange={handlePageClick}
            pageRangeDisplayed={4}
            renderOnZeroPageCount={null}
          />
        </div>
      </div>
    </div>
  );
};

export default EditBlog;
