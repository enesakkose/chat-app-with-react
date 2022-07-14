import React from 'react'
import '@/components/Button.scss'

function Button({className, children, onClick}) {
  return (
    <>
    <button className={className}>
        {children}
    </button>
    </>
  )
}

export default Button