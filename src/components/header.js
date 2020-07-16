import React from "react";
import $ from "jquery";

class Header extends React.Component {
  render() {
    return (
      <header id="home">
        <nav
          id="nav-wrap"
          class="nav-border"
          className="navbar navbar-expand-lg navbar-light bg-light"
        >
          <ul id="nav" className="navbar-nav mr-auto">
            <li id="home1" className="nav-link">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            <li id="About1" className="nav-link">
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>
            <li id="resume1" className="nav-link">
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>
            <li id="Works1" className="nav-link">
              <a className="smoothscroll" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li id="contact1" className="nav-link">
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1>Shashank Priyam Jha</h1>
            <img
              class="my-img"
              src="https://i.ibb.co/w6TTvSB/25299771-10211150463342409-7845476385140863635-o.jpg"
            />
            <h2>Frontend Developer </h2>
            <br />
            <h2> B. Tech (E.C.E)</h2>
            <hr />
          </div>
        </div>
        <br />
      </header>
    );
  }
}

export default Header;
