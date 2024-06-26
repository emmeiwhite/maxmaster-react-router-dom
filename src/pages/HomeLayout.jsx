import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

import styled from "styled-components";

function HomeLayout() {
  return (
    <Wrapper className="homepage-layout">
      <Navbar />
      <div className="main">
        <Outlet />
      </div>
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .main {
    flex: 1;
    width: var(--view-width);
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 2rem 0;
  }
`;

export default HomeLayout;
