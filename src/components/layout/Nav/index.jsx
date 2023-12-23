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
  return (
    <div className='navContainer paddingHorizontal dark-bg-second'>
      <DesktopNav navs={Navs} />
    </div>
  )
}

export default React.memo(NavIndex)
