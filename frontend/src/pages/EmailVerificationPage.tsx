import { motion } from "framer-motion";
import FloatingTriangle from "../components/FloatingTriangle";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { verifyEmail } from "../features/auth/authActions";
import Spinner from "../components/Spinner";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const LoginPage = () => {
  const [code, setCode] = useState<string[]>(["", "", "", "", "", ""]);
  const codeRefs = useRef<(HTMLInputElement | null)[]>([]);
  
  const navigate = useNavigate()

  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, verificationSuccess } = useSelector(
    (state: RootState) => state.auth
  );

  const handleChange = (digit: string, index: number) => {
    let codeList = [...code];

    codeList[index] = digit;
    const length = codeList.length;

    if (digit.length === 1) {
      codeRefs.current[index + 1]?.focus();
    } else if (digit.length > 1) {
      digit.split("").map((number, index) => {
        codeList[index] = number;
      });
    }
    if (codeList[length - 1].length > 1) {
      const lastDigit = codeList[length - 1];

      codeList = ["", "", "", "", "", ""];
      codeList[0] = lastDigit[lastDigit.length - 1];

      codeRefs.current[1]?.focus();
    }

    setCode(codeList);
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && code[index].length === 0) {
      codeRefs.current[index - 1]?.focus();
    }
  };

  useEffect(() => {
    if(verificationSuccess){
    toast.success("Email verified successfully");
    navigate('/');
    }
  }, [navigate, verificationSuccess])
  

  const handleVerifyEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(verifyEmail({ code: code.join("").slice(0,6) }));
  };
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
          <p className="  font-medium  text-white">Verify your email address</p>
        </div>
        <form onSubmit={handleVerifyEmail}>
          <div className="grid grid-cols-6 gap-5 mb-5 items-center">
            {code.slice(0,6).map((digit, index) => (
              <input
                key={index}
                value={digit}
                ref={(el) => (codeRefs.current[index] = el)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                onChange={(e) => {handleChange(e.target.value, index)}}
                className="h-16 px-2 text-center font-bold text-xl rounded-sm  focus:bg-[#cbfbe7] focus:outline-none"
              />
            ))}
          </div>
          {error && <p className="text-red-600 mb-3">{error}</p>}
          <div className="flex flex-col items-center rounded-sm text-emerald-400 font-medium">
            <button className="bg-white w-[80%] h-12 mb-3">
              {loading ? <Spinner /> : "Verify Code"}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default LoginPage;
