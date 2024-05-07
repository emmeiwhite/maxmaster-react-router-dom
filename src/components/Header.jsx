import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledBtn = styled.button`
  background-color: orange;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
`;

export default function Header() {
  return (
    <nav>
      <div className="nav-center">
        <span className="logo">MixMaster</span>
        <StyledBtn>Button Test</StyledBtn>
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
    </nav>
  );
}
