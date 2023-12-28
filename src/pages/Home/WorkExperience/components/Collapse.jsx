import React, { useState } from "react";
import {Link} from "react-router-dom";
import { useSelector } from "react-redux";
import useScrollTo from "@customHook/useScrollTo";

import {motion, AnimatePresence} from "framer-motion";

// components
import CustomImage from "@components/CustomImage";

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

function Collapse(props) {
  const { data, variants, contentVariants,skillsVariants,isDark ,currentTheme, } = props

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
    <>
      {
        data.map((item, index) => {
          return (
            <div key={index} className="WeContainer-experience-collapse">
              {/* head */}
              <div
                className="WeContainer-experience-collapse-head"
                onClick={() => togglePath(index)}
              >
                <h4 className={`dark-color`}>{item.title}</h4>

                <div className="WeContainer-experience-collapse-head-toggleBtn">
                  <h4 className={`dark-color`}>{item.duration}</h4>
                  {/* toggle icon */}
                  <div className="WeContainer-experience-collapse-head-toggleBtn-icon">
                    <svg width="25" height="25">
                      <Path isMinus={collapse === index} />
                    </svg>
                  </div>
                </div>
              </div>

              {/* body */}
              <AnimatePresence mode="wait">
                {collapse === index && (
                  <motion.div
                    key={index}
                    className={`WeContainer-experience-collapse-body ${
                      isDark ? `isDark` : `light-bg`
                    }`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}

                  >
                    {/* left */}
                    <motion.div
                      initial="offscreen"
                      animate="onscreen"
                      exit="offscreen"
                      variants={variants}
                      className={`WeContainer-experience-collapse-body-left`}
                    >
                      <div className="locationAndLink">
                        <div className="locationWrap">
                          <CustomImage
                            src={`icon/location/location.png`}
                            alt={`location`}
                            styles={`locationIcon`}
                            img2={`icon/location/location.png`}
                            img3={`icon/location/location.png`}
                          />
                          <p className={`${currentTheme}-color`}>
                            {item.location}
                          </p>
                        </div>
                        <div className="locationWrap">
                          <CustomImage
                            src={`icon/location/link.png`}
                            alt={`company link`}
                            styles={`locationIcon`}
                            img2={`icon/location/link.png`}
                            img3={`icon/location/link.png`}
                          />
                          <Link
                            className={`${currentTheme}-color`}
                            to={item.link}
                          >
                            {item.link}
                          </Link>
                        </div>
                      </div>

                      <motion.p
                        className={`${currentTheme}-color description`}
                        contentVariants={contentVariants}
                      >
                        {item.description}
                      </motion.p>

                      <AnimatePresence mode="wait">
                        <motion.div
                          className="relational"
                          initial="offscreen"
                          animate="onscreen"
                          exit="offscreen"
                          variants={variants}
                        >
                          {item.relational.map((rel, ind) => (
                            <motion.p
                              key={ind}
                              className={`${currentTheme}-color`}
                              variants={skillsVariants}
                            >
                              {rel}
                            </motion.p>
                          ))}
                        </motion.div>
                      </AnimatePresence>
                    </motion.div>

                    {/* right */}
                    <div
                      className={`WeContainer-experience-collapse-body-right`}
                    >
                      <CustomImage
                        src={`icon/companies/${item.logo}.png`}
                        alt={item.logo}
                        styles={`companyLogo`}
                        img2={`icon/companies/${item.logo}.png`}
                        img3={`icon/companies/${item.logo}.png`}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })
      }
    </>
  )
}

export default React.memo(Collapse)
