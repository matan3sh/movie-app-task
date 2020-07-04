import React from 'react';
import { NavLink } from 'react-router-dom';
import MovieFilter from '../Movie/MovieFilter';

const Navbar = () => {
  return (
    <div className='navbar'>
      <NavLink to='/'>
        <h1>
          Movie<span>App</span>
        </h1>
      </NavLink>
      <MovieFilter />
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/about'>About</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
