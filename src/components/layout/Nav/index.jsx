import React,{useEffect, useState,} from 'react'
import { NavLink, useNavigate,useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';
import { motion, useScroll, useMotionValueEvent} from "framer-motion"
import { getStorage, ref, getDownloadURL } from "firebase/storage";

// components
import DesktopNav from './desktop'
import MobileNav from './mobile'

const Navs = [
  {
    id: 'Home',
    name: 'Home',
    path: '/',
    class: 'nav-link',
  },
  {
    id: 'About',
    name: 'About',
    path: '/#about',
    class: 'nav-link',
  },
  {
    id: 'Work Expertise',
    name: 'Work Expertise',
    path: '/#work-expertise',
    class: 'nav-link',
  },
  {
    id: 'Projects',
    name: 'Projects',
    path: '/#projects',
    class: 'nav-link',
  },
  {
    id: 'Contact',
    name: 'Contact',
    path: '/#contact',
    class: 'nav-link',
  },
]

function NavIndex(props) {
  const {navBg} = props
  const toggleTheme = useSelector(state => state.theme);

  // scroll handler
  const location = useLocation();
  const { pathname, hash } = location;
  useEffect(() => {
    if (hash === '') {
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          const currentScreenWidth = window.innerWidth;
          const tableScreen = 1080
          const block = currentScreenWidth > tableScreen ? 'center' : 'start'
          element.scrollIntoView({ behavior: "smooth", block});
        }
      }, 0);
    }
  }, [pathname, hash]); 

  const handleDownload = () => {

    fetch(`${DATABASEURL}/myportfolio.json`)
    .then(res=>res.json())
    .then(data=>{
      const storage = getStorage();
      const gsReference = ref(storage, data.document);

      getDownloadURL(gsReference)
      .then((url) => {
        // const link = document.createElement('a');
        // link.href = url;
        // link.download = 'Fu_Ting_Li_Resume.pdf'; // The file name you want to use
        // link.click();

        // window.location.href = url;
        window.open(url, '_blank');
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });

    })
    .catch(err=>console.log(err))

  }

  return (
    <>
      <div
        className={`paddingHorizontal navContainer ${
          navBg ? `backFilter` : `${toggleTheme?.currentTheme}-bg-third`
        }`}
      >
        <DesktopNav navs={Navs} onDownload={handleDownload} />
        <MobileNav navs={Navs} onDownload={handleDownload} />
      </div>
    </>
  );
}

export default React.memo(NavIndex)
