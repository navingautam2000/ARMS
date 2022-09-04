import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div class="container-fluide">
        <div class="col-md-3">
        <div id="logo">ARMS</div>
        </div>
        <div class="col-md-9 ">
        <div class="head">
        <ul>
            <NavLink id="navlink" class="link" to="/Home">Home
            </NavLink>
            <NavLink id="navlink" class="link" to="/About">About
            </NavLink>
            <NavLink id="navlink" class="link" to="/Volunteer">Volunteer
            </NavLink>
            <NavLink id="navlink" class="link" to="/Rescue">Rescue
            </NavLink>
            <NavLink id="navlink" class="link" to="/Donate">Donate
            </NavLink>
            <NavLink id="navlink" class="link" to="/Contact">Contact
            </NavLink>
          </ul>
    </div>
        </div>
   
    </div>
  )
}

export default Header