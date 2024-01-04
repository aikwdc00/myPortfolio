import React from 'react'
import { useSelector } from "react-redux";
import {motion} from "framer-motion";

// components
import CustomImage from "@components/CustomImage";

function Card(props) {
  const {item, isDark, variants, contentVariants, currentTheme, } = props
  const {currentLanguage, isEN} = useSelector((state) => state.language);
  return (
    <motion.div
      className={`WeContainer-cards-card ${isDark ? "" : "light-bg-linear"}`}
      variants={contentVariants}
    >
      <div>
        <h3
          className={`dark-color ${isDark ? "" : ""}`}
        >
          {item[`${currentLanguage}-title`]}
        </h3>
        <p className={`dark-color`}>{item[`${currentLanguage}-description`]}</p>
      </div>

      <motion.div
        className={`WeContainer-cards-card-skills`}
        initial="offscreen"
        whileInView="onscreen"
        variants={variants}
        viewport={{ once: true }}
      >
        {item.skills.map((skill, index) => (
          <motion.div variants={contentVariants} key={index}>
            <CustomImage
              src={`icon/skills/${skill.icon}.png`}
              alt={skill.name}
              styles={`WeContainer-cards-card-skills-img ${
                (!isDark &&["MySQL",'Nodejs'].includes(skill.name)) ? "isDark" : (['mongoDB','JQuery',].includes(skill.name)) ?'isLight':""
              }`}
              img2={`icon/skills/${skill.icon}@2x.png`}
              img3={`icon/skills/${skill.icon}@3x.png`}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Card
