import React from 'react';
import '../components/Nav.css';
import Logo from '../assets/images/Logo.png';
import ButtonAdd from '../components/ButtonAdd';


const Nav = () => {
  return (
<nav className="nav">
  <div className="left-section">
    <div className="logo-container">
        <img src={Logo} alt="Logo de la empresa" className="logo" />
    </div>
  </div>

  <div className="right-section">
    <ButtonAdd/>
  </div>
</nav>
  )
}

export default Nav
