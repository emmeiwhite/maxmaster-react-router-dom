// NavbarWrapper.js for styled components

import styled from "styled-components";

const NavbarWrapper = styled.nav`
  background-color: var(--white);
  .nav-center {
    width: var(--view-width);
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 1.5rem 2rem;
    display: grid;
    gap: 2rem;
    align-items: center;
    @media (min-width: 768px) {
      grid-template-columns: 1fr max-content;
    }
  }

  .logo {
    font-size: clamp(1.5rem, 3vw, 3rem);
    color: var(--primary-500);
    font-size: 700;
    letter-spacing: 2px;
  }

  .nav-links {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }

  .nav-link {
    color: var(--primary-900);
    transition: var(--transition);
    letter-spacing: 2px;

    &:hover {
      color: var(--primary-500);
    }
  }
`;

export default NavbarWrapper;
