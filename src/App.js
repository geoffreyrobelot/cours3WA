import './App.css';
import Navbar from './components/Navbar.js';
import Header from './components/Header.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from 'react-particles-js';
import Home from './components/Home.js';
import About from './components/About.js';
import Formations from './components/Formations.js';
import Contact from './components/Contact.js';
import React from 'react';
// import du routeur --> HashRouter
// import de Route --> itinéraire vers 
// import de Link --> composant qui génère une balise <a href="..."
import {HashRouter, Route, Link} from 'react-router-dom';


// Composant principal de l'application 
function App() {
  return (
    <>

      <Navbar/>
      <Particles
        params={{
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: "black"
            },
            shape: {
              type: "circle"
            },
            polygon: {
              nb_sides: 6
            },
            move: {
              enable: true,
              speed: 3
            }
          }
        }} />
      
      <Header />
    </>
  )
}


export default App;
