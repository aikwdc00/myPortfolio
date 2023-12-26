import React from "react";
import { useSelector } from "react-redux";
import useScrollTo from "@customHook/useScrollTo";

import {motion} from "framer-motion";

// components
import CustomImage from "@components/CustomImage";

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
          {workExperiences.map((item, index) => (
            <motion.div
              key={index}
              className={`WeContainer-cards-card ${isDark ? "" : "isDark"}`}
              variants={contentVariants}
            >
              <div>
                <h3
                  className={`${currentTheme}-color ${isDark ? "" : "isDark"}`}
                >
                  {item.title}
                </h3>
                <p className={`${currentTheme}-color`}>{item.description}</p>
              </div>

              <motion.div
                className={`WeContainer-cards-card-skills`}
                initial="offscreen"
                whileInView="onscreen"
                variants={cardVariants}
                viewport={{ once: true }}
              >
                {item.skills.map((skill, index) => (
                  <motion.div variants={contentVariants} key={index}>
                    <CustomImage
                      src={`icon/skills/${skill.icon}.png`}
                      alt={skill.name}
                      styles={`WeContainer-cards-card-skills-img ${
                        (!isDark &&["MySQL",'Nodejs'].includes(skill.name)) ? "isDark" : ""
                      }`}
                      img2={`icon/skills/${skill.icon}@2x.png`}
                      img3={`icon/skills/${skill.icon}@3x.png`}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* work experiences */}
      </motion.div>
    </div>
  );
}

export default React.memo(WorkExperience);
