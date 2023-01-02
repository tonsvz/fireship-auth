import React from "react";
// import app.css
import "../../App.scss";
// import react router dom
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav class="navbar navbar-dark navbar-expand-lg bg-dark ">
      <div class="container-fluid ">
        <NavLink
          to={"/"}
          className="navbar-brand text-white logo-container"
          href="#"
        >
          <img src="/images/fireship-logo.png" alt="img" className="logo-img" />
          Fireship
        </NavLink>
        <button
          class="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon "></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <NavLink
                className="nav-link active text-white"
                aria-current="page"
                to={"/projects"}
              >
                Projects
              </NavLink>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">
                Users
              </a>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto">
            <li className="nav-item -auto">
              <a class="nav-link text-white " href="#">
                Login
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">
                Register
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">
                My Account
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
