import React from 'react'
import { useSelector, } from "react-redux";
import { motion,AnimatePresence } from "framer-motion";

// components
import Header from './header'
import About from './about'


function Home() {
  const toggleTheme = useSelector(state => state.theme);
  
  return (
    <AnimatePresence wait>
      <motion.div 
        key={toggleTheme.currentTheme}
        className={`${toggleTheme.currentTheme}-bg-second `}
        transition={{ duration: 0.3 }}
      >
        <Header />
        <About />
      </motion.div>
    </AnimatePresence>
  )
}

export default React.memo(Home)
