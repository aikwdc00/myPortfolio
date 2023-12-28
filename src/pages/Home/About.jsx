import React from "react";
import { useSelector } from "react-redux";
import useScrollTo from "@customHook/useScrollTo";

import {motion} from "framer-motion";

const description = [
  `As a web developer, I utilize various design and coding languages to create exceptional user experiences.`,
  `I love engaging in coding discussions with professionals from diverse backgrounds, as it not only provides me with an opportunity for personal growth but also helps me gain valuable insights.`,
  `During my leisure time, I like working out and cooking Taiwanese cuisine. I also enjoy spending time outdoors with my friends and family.`,
];

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

function About() {
  const toggleTheme = useSelector((state) => state.theme);
  const { currentTheme, isDark } = toggleTheme;

  const { targetRef } = useScrollTo();

  return (
    <div className={`sectionArea aboutContainer ${currentTheme}-bg-fourth`}>
      <div className="section-container">

        <h3 id="about" className={`${currentTheme}-color sectionTitle`} ref={targetRef}>
        // ABOUT.
        </h3>

        <motion.div
          className="aboutContainer-description"
          initial="offscreen"
          whileInView="onscreen"    
          variants={variants}
          viewport={{ once: true, }}
        >
          <motion.div 
            className="aboutContainer-description-content" 
            variants={variants}
          >
            <motion.h1 
              className={`${currentTheme}-color`}
              variants={contentVariants}
            >
              Hi, I’m Fu Ting (Fred). Nice to meet you.
            </motion.h1>

            {description.map((item, index) => (
              <motion.p 
                key={index} 
                className={`${currentTheme}-color`}
                variants={contentVariants}
              >
                {item}
              </motion.p>
            ))}
          </motion.div>

          {/* head portrait */}
          <div className="aboutContainer-description-content"></div>
        </motion.div>
      </div>
    </div>
  );
}

export default React.memo(About);
