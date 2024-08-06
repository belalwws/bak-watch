import React from "react";
import MainModal from "./Mainmodal";

function CategoryModal({ modalOpen, setModalOpen }) {
  return (
    <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
      <div className="inline-block sm:w-4/5 border border-border md:w-3/5 lg:w-2/5 w-full align-middle">
        <h2 className="text-3xl font-bold">Create</h2>
      </div>
    </MainModal>
  );
}

export default CategoryModal;
