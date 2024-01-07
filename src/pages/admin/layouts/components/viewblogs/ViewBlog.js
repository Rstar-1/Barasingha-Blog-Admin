import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import FeatherIcon from "feather-icons-react";

const ViewBlog = () => {
  // API UseState Data
  const [getuserdata, setUserdata] = useState([]);
  // Search UseState Data
  const [search, setsearchdata] = useState("");
  // Pagination UseState Data
  const [pageCount, setpageCount] = useState(0);
  const [offset, setOffset] = useState(0);

  // API Call
  const getblogdata = async () => {
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
      setpageCount(Math.ceil(response.data.totalCount / 6));
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle the error as needed
    }
  };

  // Function
  const handlePageClick = (event) => {
    console.log(event, "handle");
    let page = event.selected + 1;
    const curoffset = page > 1 ? (page - 1) * 6 : 0;
    setOffset(curoffset);

    getblogdata();
  };

  // Render API
  useEffect(() => {
    getblogdata();
  }, [search]);

  return (
    <div className="bgwhite border-d mtpx9 cust-scroll p20">
      <h6 className="fsize20 textprimary mtpx1 mbpx1 font-600">View Blogs</h6>
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
      <div className="grid-cols-3 gap-12 mtpx15 border-ec p20 rounded-10">
        {getuserdata.map((e) => (
          <div className="rounded-10 bgwhite d-shadow p10">
            <img
              src={e.picture}
              alt="logo"
              className="viewimg bg-light-primary rounded-5 object-cover"
            />
            <div className="p5">
              <small className="prpx15 plpx15 ptpx3 pbpx3 fsize12 rounded-20 textprimary bg-light-primary w-max">
                {e.category}
              </small>
              <h3 className="mtpx5 fsize17 mbpx1 textforth">{e.title}</h3>
              <p className="mtpx2 textgray fsize13 line-clamp3">{e.desc}</p>
              <div className="mtpx8 flex justify-end w-full">
                <p className=" textgray fsize11">
                  {new Date(e.createdAt).toDateString()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex w-full justify-end">
        <ReactPaginate
          className="pagination"
          breakLabel="..."
          nextLabel=">"
          previousLabel="<"
          pageCount={pageCount}
          onPageChange={handlePageClick}
          pageRangeDisplayed={6}
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
};

export default ViewBlog;
