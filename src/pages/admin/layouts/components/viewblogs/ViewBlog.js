import axios from "axios";
import React, { useState, useEffect } from "react";

const ViewBlog = () => {
  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata);
  const getdata = async () => {
    const response = await axios({
      method: "get",
      url: "http://localhost:8000/api/getdata",
    });
    setUserdata(response.data);
  };
  useEffect(() => {
    getdata();
  }, []);


  return (
    <div className="bgwhite border-d mtpx9 cust-scroll p20">
      <h6 className="fsize20 textprimary mtpx1 mbpx1 font-600">View Blogs</h6>
      <div className="grid-cols-3 gap-12 mtpx15 border-ec p20 rounded-10">
        {getuserdata.map((element, id) => (
          <div className="rounded-10 bgwhite d-shadow p10">
            <img
              src={element.img}
              alt="logo"
              className="viewimg bg-light-primary rounded-5 object-cover"
            />
            <div className="p5">
              <small className="prpx15 plpx15 ptpx3 pbpx3 fsize12 rounded-20 textprimary bg-light-primary w-max">
                {element.category}
              </small>
              <h3 className="mtpx5 fsize17 mbpx1 textforth">{element.title}</h3>
              <p className="mtpx2 textgray fsize13 line-clamp3">{element.desc}</p>
              <div className="mtpx8 flex justify-end w-full">
                <p className=" textgray fsize11">
                  {new Date(element.createdAt).toDateString()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewBlog;
