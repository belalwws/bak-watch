import React from "react";
import { useDropzone } from "react-dropzone";
import { FiUpload, FiUploadCloud } from "react-icons/fi";
import { Input } from "./UsedInputs";

const Uploader = () => {
  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    maxSize: 100000,
    onDrop: (acceptedFiles) => {
      alert(acceptedFiles[0].name);
    },
  });
  return (
    <>
      <div {...getRootProps} className="w-full text-center ">
        <div className="px-6 pt-5 pb-6 border-2 gap-6 border-border border-dashed bg-main rounded-md cursor-pointer">
          <input {...getInputProps} />
          <span className="mx-auto flex-colo text-subMain text-3xl">
            <FiUploadCloud />
          </span>
          <p className="text-sm mt-2">Drag your image here</p>
          <em className="text-sm text-gray-500">
            (only .jpg and .png files will be accepted)
          </em>
        </div>

        <label class="text-border font-semibold">FullName</label>
        <Input
          required=""
          type="text"
          placeholder="Netflixo React Tailwind"
          class="w-full text-sm mt-2 p-5 border border-border rounded text-white bg-main"
        />
        <div class="text-sm w-full">
          <label class="text-border font-semibold">Email</label>
          <input
            required=""
            type="email"
            placeholder="netflixo@gmail.com"
            class="w-full text-sm mt-2 p-5 border border-border rounded text-white bg-main"
          />
        </div>
        <div class="flex gap-2 flex-wrap flex-col-reverse sm:flex-row justify-between items-center my-4">
          <button class="bg-subMain font-medium transitions hover:bg-main border border-subMain text-white py-3 px-6 rounded w-full sm:w-auto">
            Delete Account
          </button>
          <button class="bg-main font-medium transitions hover:bg-subMain border border-subMain text-white py-3 px-6 rounded w-full sm:w-auto">
            Update Profile
          </button>
        </div>
      </div>
    </>
  );
};

export default Uploader;
