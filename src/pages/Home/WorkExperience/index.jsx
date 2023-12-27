import React, { useState } from "react";
import {Link} from "react-router-dom";
import { useSelector } from "react-redux";
import useScrollTo from "@customHook/useScrollTo";

import {motion} from "framer-motion";

// components
import Card from "./components/Card";

// data
import { workSkills, workExperiences } from "@Data/workExperiences";

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

// 定义两个路径，一个为 "-"，一个为 "+"
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

const Path = props => {
  const toggleTheme = useSelector(state => state.theme);
  return (
    <motion.path
      fill="transparent"
      strokeWidth="2"
      stroke={toggleTheme?.isDark?`#fff`:"hsl(0, 0%, 18%)"}
      strokeLinecap="round"
      variants={pathVariants}
      animate={props.isMinus ? 'closed' : 'open'}
      {...props}
    />
  )
};

function WorkExperience() {
  const toggleTheme = useSelector((state) => state.theme);
  const { currentTheme, isDark } = toggleTheme;

  const { targetRef } = useScrollTo();

  // 设置初始状态，true 为显示 "-"，false 为显示 "+"
  const [collapse,setCollapse] = useState(0);

  // 切换状态的函数
  const togglePath = (val) => {
    setCollapse(val)
  };

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
          {workSkills.map((item, index) => <Card key={index} item={item} isDark={isDark} variants={variants} contentVariants={contentVariants} currentTheme={currentTheme} />)}
        </motion.div>

        {/* work experiences */}
        <div className="WeContainer-experience">
          {
            workExperiences.map((item, index) => {
              return (
                <div key={index} className="WeContainer-experience-collapse">
                  {/* head */}
                  <div
                    className="WeContainer-experience-collapse-head"
                    onClick={()=>togglePath(index)}
                  >
                    <h4 className={`dark-color`}>{item.title}</h4>

                    <div className="WeContainer-experience-collapse-head-toggleBtn">
                      <h4 className={`dark-color`}>{item.duration}</h4>
                      {/* toggle icon */}
                      <div className="WeContainer-experience-collapse-head-toggleBtn-icon">
                        <svg width="25" height="25">
                          <motion.path
                            fill="transparent"
                            strokeWidth="3"
                            stroke={`#7300FE`}
                            strokeLinecap="round"
                            variants={pathVariants}
                            animate={(collapse === index) ? "closed" : "open"}
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* body */}
                  {
                    collapse === index ? (
                      <motion.div
                        className={`WeContainer-experience-collapse-body ${
                          isDark ? `isDark` : `light-bg`
                        }`}
                      >
                        {/* left */}
                        <div className={`WeContainer-experience-collapse-body-left`}>
                          <div className="locationAndLink">
                            <div className="locationWrap">
                              <p className={`${currentTheme}-color`}>
                                {item.location}
                              </p>
                            </div>
                            <div className="linkWrap">
                              <Link 
                                className={`${currentTheme}-color`}
                                to={item.link}
                              >
                                {item.link}
                              </Link>
                            </div>
                          </div>

                          <p className={`${currentTheme}-color description`}>
                            {item.description}
                          </p>

                          <motion.div 
                            className="relational"
                          >
                            {item.relational.map((rel, ind) => (
                              <p 
                                key={ind} 
                                className={`${currentTheme}-color`}
                              >
                                {rel}
                              </p>
                            ))}
                          </motion.div>
                        </div>

                        {/* right */}
                        <div></div>
                      </motion.div>
                    ):null
                  }
                </div>
              );
            })
          }

        </div>
      </motion.div>
    </div>
  );
}

export default React.memo(WorkExperience);
