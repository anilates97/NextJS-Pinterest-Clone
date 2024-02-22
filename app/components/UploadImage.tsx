import React from "react";
import { HiArrowUpCircle } from "react-icons/hi2";

function UploadImage() {
  return (
    <div className="h-[450px] bg-[#e9e9e9] rounded-lg">
      <label className="m-5 flex flex-col justify-center items-center cursor-pointer h-[90%] border-[2px] border-gray-300 border-dashed rounded-lg text-gray-600">
        <HiArrowUpCircle className="text-[22px]" />
        <h2 className="font-semibold">Click to upload</h2>
        <input type="file" id="dropzone-file" className="hidden" />
      </label>
    </div>
  );
}

export default UploadImage;
