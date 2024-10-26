import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      {/*  NavLink needs a prop 'to' instead of href. 'navigate to this route'. instead of a hard navigation  */}
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contact">Contact Me</NavLink>
    </nav>
  )
}

export default Nav;
