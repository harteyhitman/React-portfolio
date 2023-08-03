import React from 'react'

const Button = (props) => {
  return (
    <div className='div-button'>
        <button>{props.first}</button>
        <button>{props.second}</button>
    </div>
  )
}

export default Button