import FooterWrapper from "./FooterWrapper";

export default function Footer() {
  return (
    <FooterWrapper>
      <div className="nav-center">
        <div className="footer-content">
          <h4 className="logo">MixMaster</h4>
          <p>Copyright &copy; {new Date().getFullYear()}</p>
        </div>
      </div>
    </FooterWrapper>
  );
}
