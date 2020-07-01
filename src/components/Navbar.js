import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
// ABOVE LINE HEPS PREVENTING from requesting to server on click
// Navlink adds active class to active link

const Navbar = (props) => {
  // setTimeout(() => {
  //   props.history.push('/home');
  // }, 2000)
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <a href="#" className="brand-logo left">Poke'Times</a>
        <ul className="right">
          {/* <li><a href="/home">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contacts</a></li> */}
          {/* <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contacts</Link></li> */}
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contacts</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}
export default withRouter(Navbar);