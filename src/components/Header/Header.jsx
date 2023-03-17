import "./Header.scss";
import logo from "../../assets/images/logo-transparent.svg";

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <img className="nav__logo" src={logo} alt="logo" />
        <p className="nav__title">Kemarogi</p>
        <ul className="nav__list">
          <li className="nav__list-item">Charities</li>
          <li className="nav__list-item">Partners</li>
          <li className="nav__list-item nav__list-item--highlighted">
            Donate now
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
