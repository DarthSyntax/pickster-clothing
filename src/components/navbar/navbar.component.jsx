import { React } from 'react';
import { Link } from 'react-router-dom';
import './navbar.style.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to='/' className='navbar-link navbar-item'>
        Home
      </Link>
      <Link to='/category/jackets' className='navbar-link navbar-item'>
        Jackets
      </Link>
      <Link to='/category/hats' className='navbar-link navbar-item'>
        Hats
      </Link>
      <Link to='/category/sneakers' className='navbar-link navbar-item'>
        Sneakers
      </Link>
      <Link to='/category/mens' className='navbar-link navbar-item'>
        Men's
      </Link>
      <Link to='/category/womens' className='navbar-link navbar-item'>
        Women's
      </Link>
    </div>
  );
};

export default Navbar;
