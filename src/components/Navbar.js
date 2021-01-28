import React from 'react'
import logo from '../geo2.jpg';
import {Link} from 'react-scroll';

const Navbar = () => {
  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/#"><img className="logo" src={logo} alt="logo" /></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <li><Link to={"/#"} className="nav-link">Accueil</Link></li>
              </li>
              <li className="nav-item">
                <li><Link to="about" className="nav-link" smooth={true} duration={1000}>Propos</Link></li>
              </li>
              <li className="nav-item">
                <li><Link to="formations" className="nav-link" smooth={true} duration={1000}>Formations</Link></li>
              </li>
              <li className="nav-item">
                <li><Link to="competences" className="nav-link" smooth={true} duration={1000}>Compétences</Link></li>
              </li>
              <li className="nav-item">
              <li><Link to="contact" className="nav-link" smooth={true} duration={1000}>Contact</Link></li>
              </li>
              <li className="nav-item">
              <li><Link to="footer" className="nav-link" smooth={true} duration={1000}>Infos</Link></li>
              </li>
            </ul>
          </div>
        </div>
        <div className="reseau">
          <ul>
            <li><a href="https://www.facebook.com/geoffrey.robelot" target="_blank" rel="noreferrer"><i className="fab fa-facebook-square"></i></a></li>
            <li><a href="https://www.linkedin.com/in/geoffrey-robelot-a491b21b7/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a></li>
            <li><a href="https://www.instagram.com/geoffrey_robelot/?hl=fr" target="_blank" rel="noreferrer"><i className="fab fa-instagram-square"></i></a></li>
          </ul>
        </div>
      </nav>   
  )
}

export default Navbar
