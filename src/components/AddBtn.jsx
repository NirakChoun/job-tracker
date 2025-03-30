import React from "react";
import addBtnImg from "../assets/images/add.svg";

const AddBtn = ({ text, onClick }) => {
  return (
    <div className="">
      <div className="container mx-auto px-4 xl:px-0 max-w-7xl flex justify-end py-8 ">
        <button
          onClick={onClick}
          className="bg-primary flex items-center space-x-2 py-1 px-2 rounded-md"
        >
          <span>
            <img
              src={addBtnImg}
              alt="Add Job Button"
              className="max-w-full h-4 w-4"
            />
          </span>
          <span className="text-white">{text}</span>
        </button>
      </div>
    </div>
  );
};

export default AddBtn;
