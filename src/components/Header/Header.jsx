import "./Header.scss";

function Header() {
  return (
    <header className="header">
      {/* <Link>Logo</Link> */}
      <nav className="nav">
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
