import React from 'react'
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <>
    <nav>
        <h1><NavLink to="/">NASA Project Database</NavLink></h1>
        <NavLink to="/projects">All Projects</NavLink>
        <NavLink to="/add-project">Add New Project</NavLink>
    </nav>
    </>
  )
}