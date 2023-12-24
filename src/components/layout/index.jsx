import React from 'react'
import { Outlet } from "react-router-dom";
import Nav from "./Nav";
function RootLayout() {

  const handleContextMenu = (e) => {
    e.preventDefault(); // Prevent the default right-click context menu
    // You can optionally add custom logic here
  };

  return (
    <div onContextMenu={handleContextMenu}>
      <Nav />
      <Outlet />
    </div>
  )
}

export default React.memo(RootLayout)
