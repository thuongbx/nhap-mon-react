import "./Footer.scss";
import logo from "@assets/vite.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <img src={logo} />

        <h3 className="footer__title">Chân trang</h3>
      </div>
    </footer>
  );
};

export default Footer;
