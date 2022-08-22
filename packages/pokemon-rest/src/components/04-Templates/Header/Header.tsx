import React from 'react';
import LanguageSwitcher
  from '../../01-Atoms/Form/LanguageSwitcher/LanguageSwitcher';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';

const Header: React.FC = () => {
  return (
    <nav
      className="navbar navbar-expand-md navbar-light bg-opacity-25 bg-dark fixed-top">
      <Link to={'/'}
            className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center">
        <Image alt="Homepage" className="class-logo"
               src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi.svg?sanitize=true"
        />
      </Link>
      <LanguageSwitcher/>
    </nav>
  );
};
export default Header;
