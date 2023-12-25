import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FeatherIcon from "feather-icons-react"

const EditBlog = () => {
  const [Title, StepTitle] = useState("");
  const [Desc, StepDesc] = useState("");
  const [Category, StepCategory] = useState("");
  const [imagenew1, SetImage1] = useState("");
  const [imagenew2, SetImage2] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    console.log(e.target.files[0]);
  };
  const handleFileChange2 = (e) => {
    setFile2(e.target.files[0]);
    console.log(e.target.files[0]);
  };
  const [file, setFile] = useState(null);
  const [file2, setFile2] = useState(null);

  const { id } = useParams("");
  console.log(id);

  const getsingledata = async () => {
    const editresponse = await axios({
      method: "get",
      url: `http://localhost:8000/api/getsingledata/${id}`,
    });
    StepTitle(editresponse.data.title);
    StepCategory(editresponse.data.category);
    StepDesc(editresponse.data.desc);
    SetImage1(editresponse.data.images);
    SetImage2(editresponse.data.img);
  };

  const editUserdata = async (e) => {
    e.preventDefault();
    console.log(file, "ttile");
    const formData = new FormData();
    formData.append("image1", file);
    formData.append("image2", file2);
    formData.append("title", Title);
    formData.append("desc", Desc);
    formData.append("category", Category);
    const editresponse = await axios({
      method: "patch",
      url: `http://localhost:8000/api/updatedata/${id}`,
      data: formData,
    });
    if (editresponse.status === 201) {
      alert("completeda");
    } else {
      alert("Category Not Submitted");
    }
  };

  useEffect(() => {
    getsingledata();
  }, []);

  return (
    <div className="bgwhite border-d mtpx9 cust-scroll p20">
      <h6 className="fsize20 textprimary mtpx1 mbpx1 font-600">Update Blogs</h6>
      <p className="mtpx2 textgray fsize13">
        In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to content.
      </p>
      <div className="mtpx18">
        <div className="grid-cols-1 w-60 gap-12">
          <div className="w-full">
            <label className="fsize13 textforth">Image</label>
            <div className="relative">
              <div className="border-images side-input mtpx3">
                <div className="text-center flex justify-center">
                  <div>
                    <FeatherIcon icon="upload-cloud" size={35} />
                    <p className="textforth">Upload Here</p>
                  </div>
                </div>
              </div>
              <input
                className="absolute top-0 left-0 img-input h-full fsize13 rounded-5 plpx10 border-ec"
                placeholder="Enter"
                type="file"
                onChange={handleFileChange}
                name="img"
                id="img"
              />
            </div>
            <img
              src={imagenew1}
              alt="new"
              className="w-full blod-edit-img"
              crossOrigin="true"
            />
          </div>
          <div className="w-full">
            <label className="fsize13 textforth">Image</label>
            <div className="relative">
              <div className="border-images side-input mtpx3">
                <div className="text-center flex justify-center">
                  <div>
                    <FeatherIcon icon="upload-cloud" size={35} />
                    <p className="textforth">Upload Here</p>
                  </div>
                </div>
              </div>
              <input
                className="absolute top-0 left-0 img-input h-full fsize13 rounded-5 plpx10 border-ec"
                placeholder="Enter"
                type="file"
                onChange={handleFileChange2}
                name="img2"
                id="img2"
              />
            </div>
            <img
              src={imagenew2}
              alt="new"
              className="w-full blod-edit-img"
              crossOrigin="true"
            />
          </div>
          <div className="w-full">
            <label className="fsize13 textforth">Title</label>
            <div>
              <input
                className="side-input mtpx5 h-input fsize13 rounded-5 plpx10 border-ec"
                placeholder="Enter Title"
                type="text"
                value={Title}
                onChange={(e) => StepTitle(e.target.value)}
                name="title"
                id="title"
              />
            </div>
          </div>
          <div className="w-full">
            <label className="fsize13 textforth">Category</label>
            <div>
              <input
                className="side-input mtpx5 h-input fsize13 rounded-5 plpx10 border-ec"
                placeholder="Enter Category"
                type="text"
                value={Category}
                onChange={(e) => StepCategory(e.target.value)}
                name="Category"
                id="Category"
              />
            </div>
          </div>
          <div className="w-full">
            <label className="fsize13 textforth">Description</label>
            <div>
              <textarea
                className="textarea-input mtpx5 h-input fsize13 rounded-5 p10 border-ec"
                placeholder="Enter Description"
                type="text"
                value={Desc}
                onChange={(e) => StepDesc(e.target.value)}
                name="desc"
                id="desc"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="mtpx15">
          <button
            onClick={editUserdata}
            className="border-0 cursor-pointer font-500 textwhite rounded-5 ptpx6 pbpx6 plpx25 prpx25 fsize13 bgprimary"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditBlog;
