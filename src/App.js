import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar.js';
import Header from './components/Header.js';
import About from './components/About.js';
import Formations from './components/Formations.js';
import Competences from './components/Competences.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from 'react-particles-js';
import React from 'react';
import ScrollToTop from "react-scroll-to-top";
// import du routeur --> HashRouter
// import de Route --> itinéraire vers 
// import de Link --> composant qui génère une balise <a href="..."
import {Route, BrowserRouter, Switch} from 'react-router-dom';


// Composant principal de l'application 
function App() {
  
  return (
    <>
    
    <BrowserRouter>
      <Navbar/>
      <Particles
        params={{
          particles: {
            number: {
              value: 70,
              density: {
                enable: true,
                value_area: 700
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
      
      <ScrollToTop smooth />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/formations" component={Formations} />
        <Route path="/competences" component={Competences}/>
        <Route path="/contact" component={Contact} />
        <Route path="/footer" component={Footer}/>
      </Switch>

      <Header/>
      <About/>
      
      <Formations/>
      <Competences/>
      <Contact/>
      <Footer/>

      </BrowserRouter>
      
    
    </>
    
  )
}

export default App;
