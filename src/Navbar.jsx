import React from "react";


function Navbar() {
  return (
    <>
      <nav
        class="navbar navbar-expand-lg mynav fixed-top"
        style={{ position: "sticky" }}
      >
        <div class="container-fluid">
          <a class="navbar-brand " href="#" id="kir">
            <span id="kiru">Kiruba</span>
            <span className="">haran</span>
            <span> M</span>
          </a>
          <button
            class="navbar-toggler"
            id="navBut"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul class="navbar-nav">
              
              <li class="nav-item">
                <a class="nav-link  fs-5" href="#about">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link fs-5" href="#skills">
                  Skills
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link fs-5" href="#project">
                  Project
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link fs-5" href="#contact">
                  Contact
                </a>
              </li>
              <li class="nav-item">
                <a class="btn  nav-link fs-5" href="https://drive.google.com/file/d/1BWwcuk-BfRjTy2589qNVIhngtVboQ6br/view?usp=sharing" target="_blank"  role="button" download>
                  <i class="fas fa-download me-2"></i>
                  Download CV
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
