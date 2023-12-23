import React from 'react'

function CustomButton(props) {
  const {styleName,children,disabled, onClick } = props
  return (
    <button 
      // className={styleName} 
      // disabled={disabled} 
      // onClick={onClick} 
      {...props}
      >
      {children}
    </button>
  )
}

export default React.memo(CustomButton)
