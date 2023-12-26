import React from "react";
import { useSelector } from "react-redux";
import useScrollTo from "@customHook/useScrollTo";

import {motion} from "framer-motion";

// components
import CustomImage from "@components/CustomImage";
import Card from "./components/Card";

// data
import {workExperiences} from "@Data/workExperiences";

const variants = {
  onscreen: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  offscreen: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
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

const cardVariants = {
  onscreen: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  offscreen: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

function WorkExperience() {
  const toggleTheme = useSelector((state) => state.theme);
  const { currentTheme, isDark } = toggleTheme;

  const { targetRef } = useScrollTo();

  return (
    <div className={`sectionArea WeContainer`}>
      <h3
        id="work-expertise"
        className={`${currentTheme}-color sectionTitle`}
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
          {workExperiences.map((item, index) => <Card key={index} item={item} isDark={isDark} variants={variants} contentVariants={contentVariants} currentTheme={currentTheme} />)}
        </motion.div>

        {/* work experiences */}
      </motion.div>
    </div>
  );
}

export default React.memo(WorkExperience);
