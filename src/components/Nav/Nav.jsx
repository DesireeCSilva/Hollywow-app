import React from 'react';
import './Nav.css';
import Logo from '../../assets/images/Logo.png';


const Nav = () => {
  return (
<nav class="nav">
  <img src= { Logo } alt="Logo de la empresa" className="logo" />
</nav>
  )
}

export default Nav
