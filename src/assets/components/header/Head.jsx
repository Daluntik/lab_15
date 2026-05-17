import { Link } from 'react-router-dom';

export default function Head() {
  return (
    <header style={{
      gridArea: 'header',
      backgroundColor: '#333',
      color: '#fff',
      padding: '1rem',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <nav style={{ display: 'flex', gap: '2rem' }}>
        <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Новости</Link>
        <Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>О проекте</Link>
        <Link to="/contacts" style={{ color: '#fff', textDecoration: 'none' }}>Контакты</Link>
      </nav>
    </header>
  );
}
