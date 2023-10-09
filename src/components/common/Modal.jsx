import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

import PropTypes from "prop-types";

export default function Modal({ isOpen, setIsOpen, heading, text, btn1 }) {
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-70" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <button
                    className="bg-red-500 absolute right-0 top-0 -translate-x-3 translate-y-3 flex items-center justify-center text-white font-semibold rounded-full px-[10px] pb-[4px]"
                    onClick={closeModal}
                  >
                    x
                  </button>
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {heading}
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-richblack-700 font-medium">
                      {text}
                    </p>
                  </div>

                  <div className="mt-4 flex gap-5 font-poppins">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-red-600  px-4 py-2  text-sm text-white font-bold hover:bg-red-500  focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                      onClick={() => btn1.onClick()}
                    >
                      {btn1?.text || "Not loaded"}
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-bold text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
  heading: PropTypes.string,
  text: PropTypes.string,
  btn1: PropTypes.object,
};
