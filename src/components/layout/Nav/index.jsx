import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

// custom hooks
import useHttp from "@hooks/use-http";

// components
import DesktopNav from "./desktop";
import MobileNav from "./mobile";

const Navs = [
  {
    id: "Home",
    "EN-name": "Home",
    "ZH-name": "首頁",
    path: "/",
    class: "nav-link",
  },
  {
    id: "About",
    "EN-name": "About",
    "ZH-name": "關於我",
    path: "/#about",
    class: "nav-link",
  },
  {
    id: "Work Expertise",
    "EN-name": "Work Expertise",
    "ZH-name": "工作經驗",
    path: "/#work-expertise",
    class: "nav-link",
  },
  {
    id: "Projects",
    "EN-name": "Projects",
    "ZH-name": "專案",
    path: "/#projects",
    class: "nav-link",
  },
  {
    id: "Contact",
    "EN-name": "Contact",
    "ZH-name": "聯絡我",
    path: "/#contact",
    class: "nav-link",
  },
];

function NavIndex(props) {
  const { navBg } = props;
  const toggleTheme = useSelector((state) => state.theme);

  // const {
  //   sendRequest,
  //   status,
  //   data: signInRequestData,
  // } = useHttp(); // sign in

  // scroll handler
  const location = useLocation();
  const { pathname, hash } = location;
  useEffect(() => {
    if (hash === "") {
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          const currentScreenWidth = window.innerWidth;
          const tableScreen = 1080;
          const block = currentScreenWidth > tableScreen ? "center" : "start";
          element.scrollIntoView({ behavior: "smooth", block });
        }
      }, 0);
    }
  }, [pathname, hash]);

  const handleDownload = () => {
    fetchRequest(`/myportfolio.json`, 'GET')
      .then((data) => {
        const storage = getStorage();
        const gsReference = ref(storage, data.document);

        getDownloadURL(gsReference)
          .then((url) => {
            window.open(url, "_blank");
          })
          .catch((error) => {
            // Handle any errors
            console.error(error);
          });
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div
        className={`paddingHorizontal navContainer ${navBg ? `backFilter` : `${toggleTheme?.currentTheme}-bg-third`
          }`}
      >
        <DesktopNav navs={Navs} onDownload={handleDownload} />
        <MobileNav navs={Navs} onDownload={handleDownload} />
      </div>
    </>
  );
}

export default React.memo(NavIndex);
