import React from 'react'
import { useSelector, } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";

// components
import Header from './header'
import About from './About'
import WorkExperience from './WorkExperience';
import Projects from './Projects';
import Contact from './Contact';

function Home() {
  const toggleTheme = useSelector(state => state.theme);

  return (
    <AnimatePresence wait>
      <motion.div
        key={toggleTheme.currentTheme}
        className={`${toggleTheme.currentTheme}-bg `}
        transition={{ duration: 0.3 }}
      >
        <Header />
        <About />
        <WorkExperience />
        <Projects />
        <Contact />
      </motion.div>
    </AnimatePresence>
  )
}

export default React.memo(Home)
