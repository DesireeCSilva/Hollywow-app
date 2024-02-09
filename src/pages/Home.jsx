import React from 'react'
import Nav from '../components/Nav/Nav.jsx';
import Footer from '../components/Footer/Footer.jsx';
import BackgroundHome from '../assets/images/Background.jpg';

const Home = () => {
  return (
    <>
      <Nav/>
      <div className="container">
        <image src= {BackgroundHome} alt="Fondo simulando pared de ladrillos blancos"/>
        <h1>GALERÍA</h1>
      </div>
      <Footer/>
    </>
  )
}

export default Home
