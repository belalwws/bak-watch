import React from "react";
import { Input } from "../../Components/UsedInputs";
import SideBar from "./SideBar";

const Password = () => {
  return (
    <SideBar>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="10"
        data-aos-offset="200"
        class="col-span-6 rounded-md bg-dry  border-gray-800 p-6 aos-init aos-animate"
      >
        <div class="flex flex-col gap-6">
          <h2 class="text-xl font-bold">Change Password</h2>
          <div class="text-sm w-full">
            <label class="text-border font-semibold">Previous Password</label>
            <Input
              required=""
              type="password"
              placeholder="********"
              class="w-full text-sm mt-2 p-5 border border-border rounded text-white bg-main"
            />
          </div>
          <div class="text-sm w-full">
            <label class="text-border font-semibold">New Password</label>
            <Input
              required=""
              type="password"
              placeholder="********"
              class="w-full text-sm mt-2 p-5 border border-border rounded text-white bg-main"
            />
          </div>
          <div class="text-sm w-full">
            <label class="text-border font-semibold">Confirm Password</label>
            <Input
              required=""
              type="password"
              placeholder="********"
              class="w-full text-sm mt-2 p-5 border border-border rounded text-white bg-main"
            />
          </div>
          <div class="flex justify-end items-center my-4">
            <button class="bg-main font-medium transitions hover:bg-subMain border border-subMain text-white py-3 px-6 rounded w-full sm:w-auto">
              Change Password
            </button>
          </div>
        </div>
      </div>
    </SideBar>
  );
};

export default Password;
