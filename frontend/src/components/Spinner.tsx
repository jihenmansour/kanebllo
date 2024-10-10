import {motion } from "framer-motion"

const Spinner = () => {
  return (
    <motion.div
    className="inline-block h-8 w-8 rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface dark:text-white"
     animate={{
        rotate: [0, 360]
     }}
     transition={{
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
        duration: 1
     }}
     >
  <span
    className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
    >Loading...</span>
</motion.div>
  )
}

export default Spinner