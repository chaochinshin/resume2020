import React from "react";
import {Link} from "react-router-dom"
function Navbar() {
    
        return   (  
            
            <nav className="navbar navbar-expand-lg">
            <div className="container">
         
              <a className="navbar-brand" href="index.html" id="logo">ChinShin Chao</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"
                aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
            
              <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                  <li className="nav-item">
                    <a className="nav-link font-italic" href="resume/resume2020.pdf">Resume</a>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link font-italic" to="/portfolio">Portfolio</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link font-italic" to="/workhistory">Work History</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link font-italic" to="/contact">Contact</Link>
                  </li>
                <li className="nav-item active">
                  <Link className="nav-link font-italic" to="/homeworkdm">Homework Demo</Link>
                  </li>
                </ul>
              </div>
    
            </div>
    
          </nav>
   
        );
}
export default Navbar;