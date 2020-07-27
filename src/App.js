import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import Portfolio from './pages/Portfolio';
import Homeworkdm from './pages/Homeworkdm';
import Contact from './pages/Contact';
import Workhistory from './pages/Workhistory';
import Home from './pages/Home';

function App() {

  return (
    <Router>
      <div>
    <Navbar />

        <Switch>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/homeworkdm">
            <Homeworkdm />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/workhistory">
            <Workhistory />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
