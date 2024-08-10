import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useRef } from "react";
import { IoClose } from "react-icons/io5";

function MainModal({ modalOpen, setModalOpen, children }) {
  const cancelButtonRef = useRef(null);

  return (
    <Transition show={modalOpen} as={Fragment} appear>
      <Dialog
        as="div"
        className="fixed inset-0 z-30 overflow-y-auto text-center"
        initialFocus={cancelButtonRef}
        onClose={() => setModalOpen(false)}
      >
        <div className="min-h-screen px-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-60" />
          </Transition.Child>

          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block align-middle p-6 my-8 text-left bg-white shadow-xl rounded-lg">
              {children}
              <div className="absolute right-5 top-5">
                <button
                  onClick={() => setModalOpen(false)}
                  type="button"
                  className="inline-flex justify-center px-4 py-2 text-base font-medium text-white bg-subtle hover:bg-opacity-90 rounded-md focus:outline-none"
                >
                  <IoClose />
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}

export default MainModal;
