import React from 'react'
import Button from './Button'
import HamburgerMenu from './HamburgerMenu'
const Navbar = () => {
  return (
    <div className='navbar'>
        <h1 className='my-title'>AZEEZ <br /> OYEGOKE</h1>
        <div className="button">
            <Button 
            first='Resume'
            second='Contact' />
            <HamburgerMenu />
        </div>
       
    </div>
  )
}

export default Navbar