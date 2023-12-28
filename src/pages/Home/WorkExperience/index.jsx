import React, { useState } from "react";
import {Link} from "react-router-dom";
import { useSelector } from "react-redux";
import useScrollTo from "@customHook/useScrollTo";

import {motion, AnimatePresence} from "framer-motion";

// components
import CustomImage from "@components/CustomImage";
import Card from "./components/Card";
import Collapse from "./components/Collapse";

// data
import { workSkills, workExperiences } from "@Data/workExperiences";

const variants = {
  onscreen: {
    transition: { staggerChildren: 0.2, delayChildren: 0.5 },
  },
  offscreen: {
    transition: { 
      staggerChildren: 0.05, 
      staggerDirection: -1, 
      delay: 1 , 
      duration: 1,
      stiffness: 20,
      damping: 40,
    },
  },
};

const contentVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 2,
      // spring: 400,
    }
  }
};

const skillsVariants = {
  offscreen: {
    x: -50,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 2,
    }
  }
};

// defined 2 symbols, one for +, one for -
const pathVariants = {
  open: { // "+" symbol
    d: "M2 12h20M12 2l0 20",
    transition:{duration: 0.3 },
   },
  closed: { // "-" symbol
    d: "M2 12h20",
    transition:{duration: 0.3 },
  }, 
};

export const Path = props => (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke={`#7300FE`}
      strokeLinecap="round"
      variants={pathVariants}
      animate={props.isMinus ? 'closed' : 'open'}
      {...props}
    />
  );

function WorkExperience() {
  const toggleTheme = useSelector((state) => state.theme);
  const { currentTheme, isDark } = toggleTheme;

  const { targetRef } = useScrollTo();

  // 设置初始状态，true 为显示 "-"，false 为显示 "+"
  const [collapse,setCollapse] = useState(0);

  // 切换状态的函数
  const togglePath = (val) => {
    if(collapse === val) {
      setCollapse(-1)
    }else{
      setCollapse(val)
    }
  };

  return (
    <div className={`sectionArea WeContainer`}>
      <div className="section-container">

        <h3
          id="work-expertise"
          className={`${currentTheme}-color-second sectionTitle`}
          ref={targetRef}
        >
          // WORK EXPERTISE.
        </h3>
        <motion.div
          className="WeContainer-description"
          initial="offscreen"
          whileInView="onscreen"
          variants={variants}
          viewport={{ once: true }}
        >
          <motion.div
            className="WeContainer-cards"
            initial="offscreen"
            whileInView="onscreen"
            variants={variants}
            viewport={{ once: true }}
          >
            {/* card */}
            {workSkills.map((item, index) => <Card key={index} item={item} isDark={isDark} variants={variants} contentVariants={contentVariants} currentTheme={currentTheme} skillsVariants={skillsVariants} />)}
          </motion.div>

          {/* work experiences */}
          <div className="WeContainer-experience">
            <Collapse 
              data={workExperiences} 
              variants={variants} 
              contentVariants={contentVariants}
              skillsVariants={skillsVariants}
              currentTheme={currentTheme}
              isDark={isDark}
              collapse={collapse}
              togglePath={togglePath}
            />
          </div>
        </motion.div>

      </div>

    </div>
  );
}

export default React.memo(WorkExperience);
