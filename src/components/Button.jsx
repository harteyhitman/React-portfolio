import React from 'react'

const Button = (props) => {
  return (
    <div className='div-button'>
        <button>{props.first}</button>
        <button className='nav-contact'><a href="#footer">{props.second}</a></button>
    </div>
  )
}

export default Button