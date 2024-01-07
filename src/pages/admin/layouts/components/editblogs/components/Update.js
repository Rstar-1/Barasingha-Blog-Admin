import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FeatherIcon from "feather-icons-react"

const EditBlog = () => {
  const history = useNavigate();
  // Form UseState
  const [Title, StepTitle] = useState("");
  const [Desc, StepDesc] = useState("");
  const [Category, StepCategory] = useState("");
  const [image, SetImage] = useState("");
  const [File, setFile] = useState(null);

  // Function
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  const { id } = useParams("");
  console.log(id);

  // API Call
  const getsingledata = async () => {
    const editresponse = await axios({
      method: "get",
      url: `http://localhost:8000/api/getsingledata/${id}`,
    });
    StepTitle(editresponse.data.title);
    StepCategory(editresponse.data.category);
    StepDesc(editresponse.data.desc);
    SetImage(editresponse.data.picture);
  };
  const editUserdata = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (File) {
      formData.append("image", File);
    }
    formData.append("title", Title);
    formData.append("desc", Desc);
    formData.append("category", Category);
    const editresponse = await axios({
      method: "patch",
      url: `http://localhost:8000/api/updateblogdata/${id}`,
      data: formData,
    });
    if (editresponse.status === 201) {
      history("/edit-blogs");
    } else {
      alert("Category Not Submitted");
    }
  };

  // Render API
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
              src={image}
              alt="new"
              className="mtpx8 bg-fa editview-img object-contain"
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
