import React from "react";
import SideBar from "../SideBar";
import Tables from "../../../Components/Tables";
import { Movies } from "../../../Data/MovieData";

const MovieList = () => {
  return (
    <SideBar>
      <div className="flex flex-col gap-6">
        <div class="flex-btn gap-2">
          <h2 class="text-xl font-bold">Movie List</h2>
          <button class="bg-main font-medium transitions hover:bg-subMain border border-subMain text-white py-3 px-6 rounded">
            Delete All
          </button>
        </div>
        <Tables data={Movies} admin={true} />
      </div>
    </SideBar>
  );
};

export default MovieList;
