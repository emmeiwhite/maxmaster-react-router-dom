import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledBtn = styled.button`
  background-color: orange;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
`;

function Header() {
  return (
    <Wrapper>
      <div className="Wrapper-center">
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
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  background-color: teal;
`;
export default Header;
