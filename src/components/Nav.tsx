import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      {/*  NavLink needs a prop 'to' instead of href. 'navigate to this route'. instead of a hard navigation  */}
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <a href="#work">Portfolio</a>
      <a href="/docs/michael-caiati-resume.pdf" download="michael-caiati-resume.pdf">Resume</a>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  )
}

export default Nav;
