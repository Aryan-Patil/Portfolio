import React from 'react'
import "./Css/Header.css"
import {NavLink} from "react-router-dom";
export default function Header() {
  return (
    <div className='Header'>
        <HeaderActive className="Header-name" to="/">About</HeaderActive>
        <HeaderActive className="Header-name" to="/Work">Resume</HeaderActive>
        <HeaderActive className="Header-name" to="/Portfolio">Portfolio</HeaderActive>
        <HeaderActive className="Header-name" to="/Contact">Contact</HeaderActive>
    </div>
  )
}
function HeaderActive({ to, children, ...props }){
    const path= window.location.pathname;
  
    return (
        <NavLink className={path ? "active" : ""} to={to} {...props}>
          {children}
        </NavLink>
    )
  }