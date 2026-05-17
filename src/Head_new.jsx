import { Link } from 'react-router-dom';
import './Head.css';

export default function Head() {
  return (
    <header className="head">
      <nav className="head-nav">
        <ul className="head-nav-list">
          <li>
            <Link to="/news" className="head-nav-link">Новости</Link>
          </li>
          <li>
            <Link to="/about" className="head-nav-link">О проекте</Link>
          </li>
          <li>
            <Link to="/contacts" className="head-nav-link">Контакты</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
