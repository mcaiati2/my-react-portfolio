import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

function Nav() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <Link smooth to="/#about-section">About</Link>
      <Link smooth to="/#portfolio-section">Portfolio</Link>
      <NavLink to="/resume">Resume</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
}

export default Nav;