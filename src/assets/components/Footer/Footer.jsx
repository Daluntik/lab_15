import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer_content">
        <div className="footer_brand">
          <h2 className="h2">Trail Run 2026</h2>
          <p>Горный фестиваль бега, который объединяет спорт, природу и сообщество.</p>
        </div>

        <nav className="footer_nav" aria-label="Дополнительная навигация">
          <Link to="/races">Дистанции</Link>
          <Link to="/registration">Регистрация</Link>
          <Link to="/about">О проекте</Link>
        </nav>

        <div className="footer_meta">
          <p>Таганрог, Россия</p>
          <p>hello@trailrun.dev</p>
          <p>© {currentYear} Trail Run Team</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
