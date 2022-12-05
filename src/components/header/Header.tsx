import "./Header.scss";
import logo from "@assets/vite.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <img src={logo} />

        <h3 className="header__title">Phần đầu trang</h3>
      </div>
    </header>
  );
};

export default Header;
