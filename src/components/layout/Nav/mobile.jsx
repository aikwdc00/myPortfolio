import React, { useState, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useDimensions } from "./components/use-dimensions";
import { MenuToggle } from "./components/MenuToggle";
import { Navigation } from "./components/Navigation";

// components
import CustomImage from "@components/CustomImage";
import ThemeButton from "./components/ThemeButton";

const sidebar = {
  open: (height = 1000) => ({
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

  return (
    <motion.nav
      className="navContainer mobileNav"
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <motion.div
        className={`mobileNavBackground ${isOpen ? "open" : "closed"}`}
        variants={sidebar}
      >
        <Navigation {...props} isNavOpen={isOpen} />
      </motion.div>

      {/* logo */}
      <CustomImage 
        src={`logo/logo.png`}
        alt={`Logo`}
        styles={`nav-logo-img`}
        img2={`logo/logo@2x.png`}
        img3={`logo/logo@3x.png`}
      />

      {/* nav */}
      <div className="mobileNav-rightWrap">
        <ThemeButton />

        <MenuToggle 
          isOpen={isOpen}
          toggle={() => setIsOpen(!isOpen)} 
        />
      </div>
    </motion.nav>
  );
}

export default React.memo(MobileNav);
