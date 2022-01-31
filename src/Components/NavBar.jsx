import { Link, NavLink } from 'react-router-dom';
import React from 'react';
import CartWidget from './CartWidget';


const NavBar = () => {
  return <div>
      <div className="nav bg-black d-flex justify-content-evenly p-2">
        <Link to="/" className="nav-link" >EDM LAB</Link>
        <NavLink to="category/:id" className="nav-link" >Category</NavLink>
        <CartWidget/>

      </div>
</div>;
};

export default NavBar;

