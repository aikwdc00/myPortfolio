import * as React from "react";
import { motion } from "framer-motion";
import { NavLink, } from "react-router-dom";
import { useSelector } from "react-redux";

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export const MenuItem = ({ item,index,variants,toggleNav }) => {
  const { currentTheme,isDark, } = useSelector(state => state.theme);
  const {currentLanguage, isEN} = useSelector(state => state.language);

  const style = { borderBottom: `2px solid ${colors[index]}` };

  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      style={style}
    >
      <NavLink
        key={index}
        to={item.path}
        className={({ isActive, }) =>
            // isActive ? `${item.class} ${item.class}-active`: 
            `${item.class} ${currentTheme}-color`
        }
        onClick={() => toggleNav(false)}
      >
        {`< ${item[`${currentLanguage}-name`]} >`}
      </NavLink>
    </motion.li>
  );
};
