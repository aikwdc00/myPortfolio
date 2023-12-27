import React,{useEffect} from 'react';
import { useSelector, } from "react-redux";
import { motion,useAnimation,useTime,useTransform } from 'framer-motion';


const MyComponent = () => {
  const toggleTheme = useSelector(state => state.theme);
  const controls = useAnimation();
  const time = useTime()
  const test = useTransform(time, [0, 1], [0, 100])
  const text = 'FU TING LI'.split('');

  const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: .3,
    }
  }
}

const item = {
  hidden: { opacity: 0,},
  show: { opacity: 1 }
}

  return (
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
      >
      {text.map((char, index) => (
        <motion.span
          className={`${toggleTheme.currentTheme}-color nameSize`}
          key={index}
          variants={item}
        >
          {char}
        </motion.span>
      ))}

        <motion.span
          className={`${toggleTheme.currentTheme}-color nameSize`}
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay:text.length*.4 }}
        >
          _
        </motion.span>
    </motion.div>
  );
};

export default React.memo(MyComponent);
