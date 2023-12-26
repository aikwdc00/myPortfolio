import * as React from "react";
import { motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export const MenuItem = ({ item,index,variants,toggleNav }) => {

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
        style={{color: 'white'}}
        className={({ isActive, isPending }) =>
          isPending ? "pending"
            : isActive ? `${item.class} ${item.class}-active`
            : `${item.class}`
        }
        onClick={() => toggleNav(false)}
      >
        {`< ${item.name} >`}
      </NavLink>
    </motion.li>
  );
};
