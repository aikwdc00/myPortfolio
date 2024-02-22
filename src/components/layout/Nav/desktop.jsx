import React, { useEffect, useState } from 'react'
import { NavLink, Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';

// components
import CustomImage from '@components/CustomImage';
import CustomButton from "@components/CustomButton";
import RightSideComponent from "./components/RightSideComponent";

function DesktopNav(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const { navs, onDownload, navBg } = props
  const { currentTheme } = useSelector(state => state.theme);
  const { currentLanguage, isEN } = useSelector(state => state.language);

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
      {`<${nav[`${currentLanguage}-name`]}>`}
    </NavLink>
  ));

  const directToHome = () => {
    const { pathname, hash } = location;
    if (pathname === "/") {
      navigate("/");
      window.scrollTo(0, 0);
    } else {
      navigate("/");
    }
  }

  return (
    <div className={`navContainer desktopNav`}>
      <div className="nav-logo" onClick={directToHome}>
        <CustomImage
          src={`logo/${currentTheme}/logo.png`}
          alt={`Logo`}
          styles={`nav-logo-img`}
          img2={`logo/${currentTheme}/logo@2x.png`}
          img3={`logo/${currentTheme}/logo@3x.png`}
        />
      </div>


      <div>{renderNavs}</div>

      <div className='nav-right'>
        <RightSideComponent />

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
