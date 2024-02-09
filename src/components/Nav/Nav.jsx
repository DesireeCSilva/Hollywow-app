import React from 'react';
import './Nav.css';
import Logo from '../../assets/images/Logo.png';
import ButtonAdd from '../buttonAdd/ButtonAdd.jsx';


const Nav = () => {
  return (
<nav className="nav">
<div className="left-section">
        <img src={Logo} alt="Logo de la empresa" className="logo" />
      </div>
      <div className="right-section">
        <ButtonAdd/>
      </div>
</nav>
  )
}

export default Nav
