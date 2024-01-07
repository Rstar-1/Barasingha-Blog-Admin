import React, { useState, useEffect } from "react";
import axios from "axios";

const ActiveBlog = () => {
  // API UseState Data
  const [getuserdata, setUserdata] = useState([]);

  // API Call
  const getblogdata = async () => {
    try {
      const response = await axios({
        method: "get",
        url: "http://localhost:8000/api/getallblogdata",
      });
      setUserdata(response.data);
    } catch (error) {
      alert("wrong");
    }
  };

  // Render API
  useEffect(() => {
    getblogdata();
  }, []);

  return (
    <div className="bgwhite border-d mtpx9 cust-scroll p20">
      <h6 className="fsize20 textprimary mtpx1 mbpx1 font-600">Active Blogs</h6>
      <div className="mtpx10">
        <table>
          <thead>
            <tr>
              <th className="fsize13 w-10 textwhite font-300">
                <p>Image</p>
              </th>
              <th className="fsize13 w-20 textwhite font-300">
                <p>Title</p>
              </th>
              <th className="fsize13 w-20 textwhite font-300">
                <p>Description</p>
              </th>
              <th className="fsize13 w-20 textwhite font-300">
                <p>Category</p>
              </th>
              <th className="fsize13 w-10 textwhite font-300">
                <p>Status</p>
              </th>
              <th className="fsize13 w-20 textwhite font-300">
                <p>Created Date</p>
              </th>
            </tr>
          </thead>
          <tbody>
            {getuserdata.map((e) => (
              <>
                {e.status === true ? (
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
                      <td className="w-20 textforth">
                        <p className="prpx15 plpx15 ptpx3 pbpx3 fsize12 rounded-20 textprimary bg-light-primary w-max">
                          {e.category}
                        </p>
                      </td>
                      <td className="w-10 textforth">
                        <p className="prpx20 plpx20 ptpx3 pbpx3 fsize12 rounded-20 textsuccess bg-light-success w-max">
                          Publish
                        </p>
                      </td>
                      <td className="fsize12 w-20 textforth">
                        <p>{new Date(e.createdAt).toDateString()}</p>
                      </td>
                    </tr>
                  </>
                ) : null}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActiveBlog;
