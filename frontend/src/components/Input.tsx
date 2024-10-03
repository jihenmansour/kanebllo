import { motion } from "framer-motion";
import { inputInterface } from "../types";

const Input = ({name}: inputInterface) => {
  return (
    <div className=" flex justify-center items-center mb-5">
      <motion.input
        className="h-12 rounded-sm bg-white bg-opacity-40 hover:bg-opacity-50 focus:bg-opacity-100 focus:outline-none border border-white placeholder:text-center placeholder:text-white placeholder:opacity-100 text-center"
        placeholder={name}
        initial={{ width:"80%", transformOrigin: "center" }}
        whileFocus={{ width: "100%" }} 
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};

export default Input;
