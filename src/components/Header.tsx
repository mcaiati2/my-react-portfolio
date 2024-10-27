import Nav from "./Nav";
import { NavLink } from 'react-router-dom';


function Header() {
  return (
    <header>
      <div className="logo">
        <NavLink to="/" id="remove-underline">
        <img src="/images/logo-greyscale.jpeg" alt="Coding Logo" />
        <h3>Mike Caiati</h3>
        </NavLink>

      </div>

      <Nav />
    </header>
  )
}

export default Header;