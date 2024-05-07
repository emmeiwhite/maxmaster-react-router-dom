import { NavLink } from "react-router-dom";
import NavbarWrapper from "./NavbarWrapper";

function Header() {
  return (
    <NavbarWrapper>
      <div className="nav-center">
        <span className="logo">MixMaster</span>
        <div className="nav-links">
          <NavLink
            className="nav-link"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="nav-link"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className="nav-link"
            to="/newsletter"
          >
            Newsletter
          </NavLink>
        </div>
      </div>
    </NavbarWrapper>
  );
}

export default Header;
