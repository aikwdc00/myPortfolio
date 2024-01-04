import React, { useState, useRef } from "react";
import { NavLink, useNavigate,Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { motion } from "framer-motion";
import { useDimensions } from "./components/use-dimensions";
import { MenuToggle } from "./components/MenuToggle";
import { Navigation } from "./components/Navigation";

// components
import CustomImage from "@components/CustomImage";
import RightSideComponent from "./components/RightSideComponent";

const sidebar = {
  open: (height = window.innerHeight) => ({
    clipPath: `circle(${height * 2}px at 40px 40px)`,
    x:  0,
    opacity:1,
    transition: {
      type: "spring",
      stiffness: 40,
      restDelta: 2,
      duration: 0.5,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    opacity:0,
    x: window.innerWidth * .5,
    transition: {
      duration: 1,
      delay: 0.5,
      type: "spring",
      stiffness: 100,
      damping: 40,
    },
  },
};

function MobileNav(props) {
  const containerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const { height } = useDimensions(containerRef);
  const { currentTheme,isDark, } = useSelector(state => state.theme);

  const toggleNavHandler = (val) => {
    setIsOpen((prevState) => (prevState = val))
  }

  return (
    <motion.nav
      className="navContainer mobileNav"
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <motion.div
        className={`mobileNavBackground ${isDark?'isDark':'isLight'} ${isOpen ? "open" : "closed"}`}
        variants={sidebar}
      >
        <Navigation {...props} isNavOpen={isOpen} toggleNav={toggleNavHandler} />
      </motion.div>

      {/* logo */}
      <Link to="/" className="nav-logo">
        <CustomImage 
          src={`logo/${currentTheme}/logo.png`}
          alt={`Logo`}
          styles={`nav-logo-img`}
          img2={`logo/${currentTheme}/logo@2x.png`}
          img3={`logo/${currentTheme}/logo@3x.png`}
        />
      </Link>


      {/* nav */}
      <div className="mobileNav-rightWrap">
        <RightSideComponent />

        <MenuToggle 
          isOpen={isOpen}
          toggle={() => setIsOpen(!isOpen)} 
        />
      </div>
    </motion.nav>
  );
}

export default React.memo(MobileNav);
