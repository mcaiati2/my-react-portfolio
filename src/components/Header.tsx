import Nav from "./Nav";

function Header() {
  return (
    <header>
      <div className="logo">
        <img src="/images/bob.jpg" alt="Bob Logo" />
      <h3>Mike Caiati</h3>
      </div>
      

      <Nav />
    </header>
  )
}

export default Header;