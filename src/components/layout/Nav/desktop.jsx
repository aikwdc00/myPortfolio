import React, {useEffect, useState} from 'react'
import { NavLink,Link } from "react-router-dom";
import { useSelector } from 'react-redux';

// components
import CustomImage from '@components/CustomImage';
import CustomButton from "@components/CustomButton";
import ThemeButton from './components/ThemeButton';

function DesktopNav(props) {
  const {navs,onDownload, navBg} = props
  const toggleTheme = useSelector(state => state.theme);
  const {currentTheme} = toggleTheme

  const renderNavs = navs.map((nav, index) => (
    <NavLink
      key={index}
      to={nav.path}
      className={({ isActive, isPending }) =>
        isPending
          ? "pending"
          : isActive
          ? `${nav.class} ${nav.class}-active ${currentTheme}-color`
          : `${nav.class} ${currentTheme}-color`
      }
    >
      {`<${nav.name}>`}
    </NavLink>
  ));

  return (
    <div className={`navContainer desktopNav`}>
      <Link to="/" className="nav-logo">
        <CustomImage 
          src={`logo/logo.png`}
          alt={`Logo`}
          styles={`nav-logo-img`}
          img2={`logo/logo@2x.png`}
          img3={`logo/logo@3x.png`}
        />
      </Link>


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
