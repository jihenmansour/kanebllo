import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import FloatingTriangle from "../components/FloatingTriangle";
import Input from "../components/Input";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { login } from "../features/auth/authActions";
import Spinner from "../components/Spinner";

const LoginPage = () => {
const [email, setEmail] = useState<string>("");
const [password, setPassword] = useState<string>("");

const navigate = useNavigate();

const dispatch = useDispatch<AppDispatch>();
const {error, loginSuccess, loading} = useSelector((state: RootState) => state.auth)

useEffect(()=> {
 if(loginSuccess) navigate('/')
}, [navigate, loginSuccess])

const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
e.preventDefault();
dispatch(login({email, password}))

}
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
        <form onSubmit={handleLogin}>
        <Input 
        name="Email" 
        onChange={(e)=> {
          setEmail(e.target.value);
          }}/>
        <Input 
        name="Password" 
        type="password"
        onChange={(e)=> {
          setPassword(e.target.value);
          }}/>
          {error && <p className="text-red-600 mb-3">{error}</p>}
        <div className="flex flex-col items-center rounded-sm text-emerald-400 font-medium">
          <button className="bg-white w-[80%] h-12 mb-3">
          {loading?<Spinner/> : "Login" } 
          </button>
          <p className="text-white">
            Don't have an account? &nbsp;
            <Link to="/signup" className="text-white hover:underline">
              Sign up
            </Link>
          </p>
        </div>
        </form>
      </motion.div>
    </div>
  );
};

export default LoginPage;
