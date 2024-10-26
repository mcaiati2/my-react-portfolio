function Footer() {
  const date = new Date(); // dynamic current date
  return (
    <footer>
      <p>&copy; Copyright {date.getFullYear()} </p>
      <p>Designed & Developed By Mike Caiati</p>
      {/* icons inserted here */}
    </footer>
  )
}

export default Footer;