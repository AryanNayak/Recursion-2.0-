import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import logo from "../asset/logo_transparent (1).png"

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

export default class NavbarComponent extends Component {
  componentDidMount() {
    let sidenav = document.querySelector("#slide-out");
    M.Sidenav.init(sidenav, {});
  }
  render() {
    return (
      <div>
        <nav className='nav z-depth-0'>
          <div className='nav-wrapper'>
            <a href='#logo' className='brand-logo purple-text text-darken-4'>
              WE
              <u>
                <span className='teal-text text-accent-3 i-line'>WIN</span>
              </u>
            </a>
            <ul id='nav-mobile' className='right hide-on-med-and-down'>
              <li>
                <a
                  href='#login'
                  className='btn btn-nav transparent z-depth-0 purple-text text-darken-4'
                >
                  Login
                </a>
              </li>
              <li>
                <a
                  href='#join'
                  className='btn btn-nav transparent z-depth-0 white-text text-darken-4 purple darken-4'
                >
                  Join Now
                </a>
              </li>
            </ul>
            <a href='#menu' data-target='slide-out' className='sidenav-trigger'>
              <i className='purple-text text-darken-4 material-icons'><img src= {logo} alt=""/></i>
            </a>
          </div>
        </nav>
        <ul id='slide-out' className='sidenav'>
          <li>
            <a
              href='#login'
              className='btn btn-nav transparent z-depth-0 purple-text text-darken-4'
            >
              Login
            </a>
          </li>
          <li>
            <a
              href='#join'
              className='btn btn-nav transparent z-depth-0 white-text text-darken-4 purple darken-4'
            >
              Join Now
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
