import * as React from "react";
import { motion,AnimatePresence } from "framer-motion";
import { MenuItem } from "./MenuItem";

// components
import CustomButton from "@components/CustomButton";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const buttonVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

export const Navigation = (props) => {
  const {navs,onDownload, isNavOpen} = props;

  return (
    <motion.ul 
      className="mobileNavBackground-list"
      variants={variants}
    >

      {navs.map((item,index) => (
        <MenuItem item={item} index={index} key={index} variants={buttonVariants} />
      ))}

      {/* download resume */}
      <CustomButton 
        variants={buttonVariants}
        animate={isNavOpen ? 'open' : 'closed'}
        className='Resume-btn'
        onClick={onDownload}
      >
        <span className={`Resume-btn-text dark-color`}>Resume</span>
      </CustomButton>
    </motion.ul>
  )
};
