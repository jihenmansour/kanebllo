import React from "react";
import Modal from "react-modal";
import { motion } from "framer-motion";
import { Plus, X } from "lucide-react";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    
  },
};

const Dialog = () => {

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <motion.button
        className="bg-emerald-400 text-base text-white h-full font-sm md:font-semibold rounded-xl p-2 md:p-4"
        onClick={openModal}
        whileHover={{
          backgroundColor: "#6ee7b7",
        }}
        transition={{
          duration: 0.3,
          ease: "linear",
        }}
      >
        <div className="flex gap-1">
          <Plus />
          <p>Add project</p>
        </div>
      </motion.button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      style={customStyles}
      >
        <div className="md:w-96 text-base font-semibold">
          <div className="flex justify-between ">
            <h1 className="text-gray-600 ">Add Project</h1>
            <button onClick={closeModal}>
              <X />
            </button>
          </div>
          <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700" />
          <form>
            <div className="flex flex-col gap-2">
              <label>Name</label>
              <input className="w-full p-2 border border-gray-300 outline-none focus:border-emerald-400 rounded" />
            </div>

            <button className="bg-emerald-400 text-base text-white font-semibold rounded-xl py-3 px-8 mt-6">
              <div className="flex gap-2">
                <h1>Save</h1>
              </div>
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default Dialog;
