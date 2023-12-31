import React, { useState } from 'react'
import { Outlet, useLocation,useNavigate } from "react-router-dom";
import { motion, useScroll, useMotionValueEvent} from "framer-motion"

// components
import Nav from "./Nav";
import Footer from "./Footer";

// MUI
import { VerticalAlignTop } from '@mui/icons-material';

const topVariants = {
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: .3,
    }
  },
  hide: {
    opacity: 0,
    y: 100,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1,
    }
  }
}

function RootLayout() {
  const { scrollY,scrollYProgress } = useScroll();
  const [navBg, setNavBg] = useState(null);
  const [topBtn, setTopBtn] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();
  const { pathname, hash } = location;

  useMotionValueEvent(scrollY, "change", (latest) => {
    // console.log("Page scroll: ", latest)
    if(latest > 100){
      setNavBg(true)
      setTopBtn(true)
    }else{
      setNavBg(false)
      setTopBtn(false)
    }
  })

  const handleContextMenu = (e) => {
    e.preventDefault(); // Prevent the default right-click context menu
  };

  const scrollHandler = () => {
    if(hash.includes('#')){
      navigate('/')
      window.scrollTo({top: 0, behavior: "smooth"})
    }else{
      window.scrollTo({top: 0, behavior: "smooth"})
    }
  }

  return (
    <div onContextMenu={handleContextMenu}>
      <Nav navBg={navBg} />
      <Outlet />
      {/* <Footer /> */}
      {/* top button */}
      <motion.div
        className={`top-btn ${topBtn ? "show" : ""}`}
        onClick={scrollHandler}
        variants={topVariants}
        initial={`hide`}
        animate={`${topBtn ? "show" : ""}`}
        exit={`hide`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <VerticalAlignTop className='TopBtn' />
      </motion.div>
    </div>
  )
}

export default React.memo(RootLayout)
