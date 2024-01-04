import React from 'react'

import ThemeButton from "./ThemeButton";
import LangButton from './LangButton';

const RightSideComponent = () => {
  return (
    <>
      {/* language button */}
      <LangButton />

      {/* theme button */}
      <ThemeButton />
    </>
  )
}

export default React.memo(RightSideComponent)
