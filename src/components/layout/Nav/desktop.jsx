import React from 'react'
import { NavLink, useNavigate } from "react-router-dom";

// components
import CustomImage from '@components/CustomImage';
import CustomButton from "@components/CustomButton";

import ThemeButton from './components/ThemeButton';

function DesktopNav(props) {
  const navigate = useNavigate();

  const {navs} = props

  const handleDownload = () => {
    // 创建一个虚拟链接
    const link = document.createElement('a');
    // 设置链接的属性，包括文件名和下载链接
    link.href = '/public/doc/Fu_Ting_Li_Resume.pdf'; // 替换为你的文件路径
    link.download = 'Fu_Ting_Li_Resume.pdf'; // 替换为你的文件名
    // 模拟点击链接进行下载
    link.click();
  };

  const renderNavs = navs.map((nav,index) => (
      <NavLink
        key={index}
        to={nav.path}
        style={{color: 'white'}}
        className={({ isActive, isPending }) =>
          isPending ? "pending"
            : isActive ? `${nav.class} ${nav.class}-active`
            : `${nav.class}`
        }
        // onClick={() => setToggleDeskMenu(false)}
      >
        {`<${nav.name}>`}
      </NavLink>
  ))

  return (
    <div className='navContainer'>
      <CustomImage 
        src={`logo/logo.png`}
        alt={`Logo`}
        styles={`nav-logo-img`}
        img2={`logo/logo@2x.png`}
        img3={`logo/logo@3x.png`}
      />

      <div>
        {renderNavs}
      </div>


      <div className='nav-right'>
        {/* theme button */}
        <ThemeButton />

        {/* download resume */}
        <CustomButton 
          className='Resume-btn'
          onClick={handleDownload}
        >
          <span className={`Resume-btn-text dark-color`}>Resume</span>
        </CustomButton>
      </div>
    </div>
  )
}

export default React.memo(DesktopNav)
