import React from 'react'
import {Link} from 'react-router-dom'
import { motion,AnimatePresence } from "framer-motion";
import { useSelector, } from "react-redux";

// components
import SvgBg from './components/SvgBg'
import MyName from '@components/MyName'
import CustomImage from '@components/CustomImage'

// data
import { contactData } from "@Data/contactData";

function Header() {
  const toggleTheme = useSelector(state => state.theme);
  const { currentTheme } = toggleTheme;

  const renderSocialMedias = contactData.map((item, index) => (
    <Link
      to={item.link}
      key={index}
      target="_blank"
      rel="noopener noreferrer"
      className={`nameArea-Contacts-Link`}
    >
      <CustomImage
        src={`icon/SocialMedia/${item.icon}/${item.icon}.png`}
        alt={`Social Media`}
        styles={`socialMedia-img`}
        img2={`icon/SocialMedia/${item.icon}/${item.icon}@2x.png`}
        img3={`icon/SocialMedia/${item.icon}/${item.icon}@3x.png`}
      />
    </Link>
  ))

  return (
    <div className="sectionArea headerContainer">
      <SvgBg />

      <dir className={`nameArea`}>
        <MyName />
        <p className={`nameArea-description ${currentTheme}-color`}>
          Software Engineer, Front-end & App Developer.
        </p>

        <div className="nameArea-Contacts">
          {renderSocialMedias}
        </div>
      </dir>
    </div>
  );
}

export default React.memo(Header)
