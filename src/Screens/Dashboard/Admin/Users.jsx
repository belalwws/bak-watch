import React from "react";
import SideBar from "../SideBar";
import { HiPlus } from "react-icons/hi";
import Tables2 from "../../../Components/Table2";
import { CategoriesData } from "../../../Data/CategoriesData";
import { UserData } from "../../../Data/MovieData";

const Users = () => {
  return (
    <SideBar>
      <div className="flex flex-col gap-6">
        <h2 class="text-xl font-bold">users</h2>
        <Tables2 data={UserData} users={true} />
      </div>
    </SideBar>
  );
};

export default Users;
