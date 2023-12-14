import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { BiX, BiEnvelope } from "react-icons/bi";
import axios from "../api/axios";
import notify from "../utils/notify";

function Modal({ productId }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post("products/add-email", {
        userEmail: email,
        productId,
      });

      notify("Email added successfully!", "success");
      setIsSubmitting(false);
      setEmail("");
      closeModal();
    } catch (err) {
      notify(err.response.data.message, "error");
    }
  };

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        className="cursor-pointer [border:none] py-4  bg-black rounded-51xl w-full flex items-center justify-center text-[2rem] font-semibold font-inter text-white text-left hover:bg-opacity-70"
        onClick={openModal}
      >
        Track
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          onClose={closeModal}
          className="fixed inset-0 overflow-y-auto bg-black bg-opacity-60"
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              Leave="ease-in duration-200"
              LeaveFrom="opacity-0"
              LeaveTo="opacity-1"
            >
              <Dialog.Overlay className="fixed inset-0"></Dialog.Overlay>
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            ></span>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="p-6  bg-white inline-block w-full max-w-md my-8 overflow-hidden text-left align-middle transition-all transform  shadow-xl rounded-2xl">
                <div className="flex flex-col">
                  <div className="flex justify-between items-center">
                    <img src="/logo.png" className="w-10 h-10"></img>
                    <BiX className="text-13xl" onClick={closeModal} />
                  </div>
                  <h4 className="font-inter text-[1.5rem] leading-[24px] font-semibold m-0 mt-7 ">
                    Stay updated with product pricing alerts right in your
                    inbox!
                  </h4>
                  <p className="font-inter m-0  text-gray-600 mt-2">
                    Never miss a bargain again with our timely alerts!
                  </p>
                  <form className="flex flex-col mt-8" onSubmit={handleSubmit}>
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-700 font-inter m-0"
                    >
                      Email address
                    </label>
                    <div className="px-5 py-3 mt-3 flex items-center border gap-2 border-solid border-gray-300 rounded-[27px]">
                      <BiEnvelope className="text-[1.5rem] m-0 text-gray-500" />
                      <input
                        required
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        id="email"
                        placeholder="Enter your email address"
                        className="flex-1 pl-1 border-none text-gray-500 text-[1rem] focus:outline-none border border-gray-300 rounded-[27px] "
                      ></input>
                    </div>
                    <button className=" px-5 py-3 text-white text-[1rem] font-semibold border border-secondary bg-black rounded-lg mt-8 cursor-pointer hover:bg-opacity-70">
                      {isSubmitting ? "Submiting..." : "Track Product"}
                    </button>
                  </form>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default Modal;
