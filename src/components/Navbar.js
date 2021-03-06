import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({title1,title2,title3}) => {

 return (
    
    <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <a className="navbar-brand" href="/">
      <img src="https://i.pinimg.com/600x315/2c/b6/70/2cb670b6ddd8922a1c1b2fee4f6f758c.jpg" className="rounded" alt="description" style={{width:'60px'}} />
      </a>

      
      <ul className="navbar-nav">
      <li className="nav-item">
      <Link to='/' className="nav-link">{title1}</Link>
      </li>
      <li className="nav-item">
      <Link to='/about' className="nav-link">{title2}</Link>
      </li>
      </ul>
      </nav>
      </div>




      )


   };

    Navbar.defaultProps = {
      title1:'Home',
      title2:'About',
   };

   Navbar.propTypes = {
      title1: PropTypes.string.isRequired,
      title2: PropTypes.string.isRequired,
   };







export default Navbar
