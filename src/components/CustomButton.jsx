import React from 'react'
import {motion} from 'framer-motion'

function CustomButton(props) {
  const {styleName, children, disabled, onClick } = props

  return (
    <motion.button 
      whileHover={{ scale: 1.1, transition: { type:'spring', bounce:0.8, duration: 1 } }}
      whileTap={{ scale: 0.95 }}
      {...props}
      >
      {children}
    </motion.button>
  )
}

export default React.memo(CustomButton)
