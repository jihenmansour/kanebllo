import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import FloatingTriangle from "../components/FloatingTriangle";
import Input from "../components/Input";

const LoginPage = () => {
  return (
    <div className="h-screen overflow-hidden relative flex items-center justify-center bg-gradient-to-r from-[#50A8A2] via-emerald-400 to-emerald-300">
      <FloatingTriangle size={"size-32"} delay={0} left={"10%"} />
      <FloatingTriangle size={"size-20"} delay={1} left={"50%"} />
      <FloatingTriangle size={"size-24"} delay={3} left={"80%"} />
      <FloatingTriangle size={"size-9"} delay={5} left={"70%"} />
      <FloatingTriangle size={"size-16"} delay={7} left={"30%"} />
      <FloatingTriangle size={"size-5"} delay={17} left={"90%"} />
      <FloatingTriangle size={"size-8"} delay={10} left={"30%"} />
      <FloatingTriangle size={"size-20"} delay={12} left={"40%"} />
      <FloatingTriangle size={"size-40"} delay={13} left={"80%"} />
      <motion.div
        className="max-w-md w-full p-5 text-center font-sans"
        animate={{
          opacity: [0, 1],
          y: [20, 0],
        }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col mb-8 justify-between">
          <h1 className="  font-medium text-3xl text-white mb-3">
            Welcome to&nbsp;
            <span className="text-[#399080]">Kanbello</span>
          </h1>
          <p className="  font-medium  text-white">
            Sign in by entering information below
          </p>
        </div>
        <Input name="Email" />
        <Input name="Password" />
        <div className="flex flex-col items-center rounded-sm text-emerald-400 font-medium">
          <button className="bg-white w-[80%] h-12 mb-3">Login</button>
          <p className="text-white">
            Don't have an account? &nbsp;
            <Link to="/signup" className="text-white hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
