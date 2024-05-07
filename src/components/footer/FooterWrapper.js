import styled from "styled-components";

const FooterWrapper = styled.footer`
  background-color: var(--white);
  .nav-center {
    width: var(--view-width);
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 1.5rem 0;
  }

  .footer-content {
    display: grid;
    gap: 2rem;
    align-items: center;
    @media (min-width: 768px) {
      grid-template-columns: min-content 1fr;
    }
  }

  .logo {
    font-size: clamp(1.2rem, 2vw, 2rem);
    color: var(--primary-500);
    font-size: 700;
    letter-spacing: 2px;
  }
`;

export default FooterWrapper;
