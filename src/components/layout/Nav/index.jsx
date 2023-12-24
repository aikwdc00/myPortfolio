import React from 'react'
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

function NavIndex() {

  const handleDownload = () => {
    // 创建一个虚拟链接
    const link = document.createElement('a');
    // 设置链接的属性，包括文件名和下载链接
    link.href = '/public/doc/Fu_Ting_Li_Resume.pdf'; // 替换为你的文件路径
    link.download = 'Fu_Ting_Li_Resume.pdf'; // 替换为你的文件名
    // 模拟点击链接进行下载
    link.click();
  };

  return (
    <>
      <div className='navContainer paddingHorizontal dark-bg-second'>
        <DesktopNav navs={Navs} onDownload={handleDownload} />
        <MobileNav navs={Navs} onDownload={handleDownload} />
      </div>
    </>
  )
}

export default React.memo(NavIndex)
