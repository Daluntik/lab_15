import { Link } from 'react-router-dom';
import './Head.css';

export default function Head() {
  return (
    <header className="head">
      <div className="head__content">
        <nav className="head__nav" aria-label="Основная навигация">
          <Link to="/news">Новости</Link>
          <Link to="/about">О проекте</Link>
          <Link to="/contacts">Контакты</Link>
        </nav>
      </div>
    </header>
  );
}
