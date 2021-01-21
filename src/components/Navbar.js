import React from 'react'
import logo from '../geo.png';
import {BrowserRouter, HashRouter, Route, Link, Switch} from 'react-router-dom';
import About from './About.js';
import Home from './Home.js';
import Formations from './Formations.js';
import Contact from './Contact.js';

const Navbar = () => {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo" /></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>


          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">


              <li className="nav-item active">
                <li><Link to={"/"} className="nav-link">Home</Link> </li>
              </li>
              <li className="nav-item">
                <li><Link to={"/about"} className="nav-link">About</Link> </li>
              </li>
              <li className="nav-item">
                <li><Link to={"/formations"} className="nav-link">Formations</Link></li>
              </li>
              <li className="nav-item">
                <li><Link to={"/contact"} className="nav-link">Contact</Link></li>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/formations" component={Formations} />
        <Route path="/contact" component={Contact} />
      </Switch>

    </BrowserRouter>

  )
}

export default Navbar
