import React, {useEffect, useState} from 'react'
import { NavLink, useNavigate,useLocation } from "react-router-dom";

import { motion, useScroll, useMotionValueEvent} from "framer-motion"

// components
import CustomImage from '@components/CustomImage';
import CustomButton from "@components/CustomButton";
import ThemeButton from './components/ThemeButton';

function DesktopNav(props) {
  const {navs,onDownload} = props
  const { scrollY,scrollYProgress } = useScroll();
  
  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Page scroll: ", latest)
  })

  const renderNavs = navs.map((nav, index) => (
    <NavLink
      key={index}
      to={nav.path}
      style={{ color: "white" }}
      className={({ isActive, isPending }) =>
        isPending
          ? "pending"
          : isActive
          ? `${nav.class} ${nav.class}-active`
          : `${nav.class}`
      }
    >
      {`<${nav.name}>`}
    </NavLink>
  ));

  return (
    <div className='navContainer desktopNav'>
      <CustomImage 
        src={`logo/logo.png`}
        alt={`Logo`}
        styles={`nav-logo-img`}
        img2={`logo/logo@2x.png`}
        img3={`logo/logo@3x.png`}
      />

      <div>{renderNavs}</div>

      <div className='nav-right'>
        {/* theme button */}
        <ThemeButton />

        {/* download resume */}
        <CustomButton 
          className='Resume-btn'
          onClick={onDownload}
        >
          <span className={`Resume-btn-text dark-color`}>Resume</span>
        </CustomButton>
      </div>
    </div>
  )
}

export default React.memo(DesktopNav)
