import React from 'react'
import { motion,AnimatePresence } from "framer-motion";
import { useSelector, } from "react-redux";

// components
import SvgBg from './components/SvgBg'
import MyName from '@components/MyName'

function Header() {
  const toggleTheme = useSelector(state => state.theme);

  return (
    <div className='headerContainer'>
      <SvgBg />

      <dir className={`nameArea`}>
        <MyName />
      </dir>
    </div>
  )
}

export default React.memo(Header)
