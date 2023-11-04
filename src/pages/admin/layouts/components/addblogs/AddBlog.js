import React from "react";
import Select from "react-select";

const AddBlog = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <div className="bgwhite border-d mtpx9 cust-scroll p20">
      <h6 className="fsize20 textprimary mtpx1 mbpx1 font-600">Add Blogs</h6>
      <p className="mtpx2 textgray fsize13">
        In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to content.
      </p>
      <div className="mtpx18">
        <div className="grid-cols-1 w-60 gap-12">
          <div className="w-full">
            <label className="fsize13 textforth">Image</label>
            <div>
              <input
                className="side-input mtpx5 h-input fsize13 rounded-5 plpx10 border-ec"
                placeholder="Enter"
              />
            </div>
          </div>
          <div className="w-full">
            <label className="fsize13 textforth">Title</label>
            <div>
              <input
                className="side-input mtpx5 h-input fsize13 rounded-5 plpx10 border-ec"
                placeholder="Enter Title"
              />
            </div>
          </div>
          <div className="w-full">
            <label className="fsize13 textforth">Category</label>
            <div>
              <Select
                className="category-input mtpx5 fsize14"
                placeholder="Category"
                options={options}
              />
            </div>
          </div>
          <div className="w-full">
            <label className="fsize13 textforth">Description</label>
            <div>
              <textarea
                className="textarea-input mtpx5 h-input fsize13 rounded-5 p10 border-ec"
                placeholder="Enter Description"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="mtpx15">
          <button className="border-0 cursor-pointer font-500 textwhite rounded-5 ptpx6 pbpx6 plpx25 prpx25 fsize13 bgprimary">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
