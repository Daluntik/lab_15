import { Link } from 'react-router-dom';
import { navigationList } from '../../../navigation';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="header_nav" aria-label="Основная навигация">
        <ul className="header_nav-list">
          {navigationList.map((link) => (
            <li
              className="header_nav-item"
              key={link.to}
            >
              <Link
                to={link.to}
                className="header_nav-link"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
