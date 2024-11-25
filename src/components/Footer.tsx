function Footer() {
  const date = new Date(); // dynamic current date
  return (
    <footer>
      <p>&copy; Copyright {date.getFullYear()} </p>
      <p>Designed & Developed By Mike Caiati</p>
      <p>Logo Design By Freepik</p>
        <div id="footer-icons">
          <a href="https://github.com/mcaiati2">
            <img src="/images/github-logo-white.png" alt="GitHub Logo" />
          </a>
          <a href="https://www.linkedin.com/in/michael-caiati">
            <img src="/images/linkedin-logo-white.png" alt="LinkedIn Logo" />
          </a>
          <a href="https://stackoverflow.com/users/28009833/mike-caiati">
            <img id="white-background" src="/images/stack-overflow-icon.png" alt="Stack Overflow Logo" />
          </a>
        </div>
    </footer>
  )
}

export default Footer;