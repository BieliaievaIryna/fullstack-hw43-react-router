import { Link } from "react-router"

const FooterLinks = () => {

  return (
    <div className="footer">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
  )
}

export default FooterLinks