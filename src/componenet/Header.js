import React from 'react';
import SearchBar from './SearchBar'; // Import the SearchBar component
import './Header.css'; // Import CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">My Website</h1>
        <nav className="nav">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <SearchBar /> {/* Add SearchBar component here */}
      </div>
    </header>
  );
};

export default Header;
