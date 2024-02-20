import { useState } from "react";
import React from 'react';
import { links } from "../data"
import {NavLink} from "react-router-dom"
import "./navbar.css"

function Navbar()  {
  const [showMenu, setshowMenu] = useState(false);
  return (
    <nav className="nav">
      <div className={`${showMenu ? 'nav__menu show-menu' : 'nav__menu'}`}>
        <ul className="nav__list">
          {links.map(({ name, icon, path }, index) => {
            return (
              <li className="nav__item" key={index}>
                <NavLink to={path} className={({ isActive }) => isActive ? 'nav__link active-nav' : 'nav__link'}
                onClick={() => setshowMenu(!showMenu)}>
                  {icon}
                  <h3 className="nav__name">{name}</h3>
                </NavLink>
              </li>
            )
          })}
        </ul>
      </div>

      <div className={`${showMenu ? 'nav__toggle animate-toggle' : 'nav__toggle'}`} onClick={()=>setshowMenu(!showMenu)}>
        <span></span>
        <span></span>
        <span></span>

      </div>

    </nav>
  )
}

export default Navbar;
