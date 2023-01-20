import React from 'react'
import logo from '../Images/logo.png'
function Header() {
  return (
    <header className='header-container'>
      <img src={logo} alt='CataTube-logo' className='logo'></img>
      <h1 className='header-title'>Catatube</h1>
    </header>
  )
}

export default Header