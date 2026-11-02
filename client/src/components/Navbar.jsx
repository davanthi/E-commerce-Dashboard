import React from 'react'
import { Link } from 'react-router-dom';


function Navbar() {
 
  return (
    <header className="site-header">
      <Link className="brand" to='/'>
        <span className="brand-mark">CD</span>
        <span className="brand-copy">
          <strong>CampusDesk</strong>
          <span>Student records</span>
        </span>
      </Link>
      <ul className="nav-ul">
        <li>
          <Link to="/">Products List</Link>
        </li>
        <li>
          <Link to="/add-product">Add Products</Link>
        </li>
        <li>
          <Link to="/update-product">Update Products</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
      </ul>
      <ul className="nav-ul">
        <li>
          <Link to="/register">Sign UP</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </header>
  );
}

export default Navbar