import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/show_user" className="nav-link">
        Show User
      </Link>
      <Link to="/product" className="nav-link">
        Show Product
      </Link>
    </nav>
  );
}
