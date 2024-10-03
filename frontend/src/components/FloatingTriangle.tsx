import {motion} from "framer-motion"
import { floatingTriangleInterface } from "../types"
import { cn } from "../utils/cn"
import { useEffect, useState } from "react"

const FloatingTriangle = ({size, delay, left}: floatingTriangleInterface) => {
    const [viewPortHeight, setViewPortHeight] = useState<number>(0);
    useEffect(() => {
     setViewPortHeight(window.innerHeight)
    }, [])
    
  return (
    <motion.div className={cn('absolute bottom-[-180px] bg-white opacity-25', size)}
    style={{left:left}}
    animate={{
        y:[0,-viewPortHeight-400],
        rotate:[0,360]
    }}
    transition={{
        repeat: Infinity,
        duration: 16,
        delay:delay,
        repeatType: "loop",
        ease: "linear"
    }}
    />

  )
}

export default FloatingTriangle