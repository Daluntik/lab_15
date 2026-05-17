import { useLocation } from 'react-router-dom';
import './Article.css';

export default function Article() {
  const location = useLocation();

  return (
    <article className="article">
      {location.pathname === '/news' && (
        <>
          <h1>Новости</h1>
          <p>
            Здесь вы найдёте актуальную информацию о событиях и обновлениях.
          </p>
        </>
      )}

      {location.pathname === '/about' && (
        <>
          <h1>Южный федеральный университет</h1>
        </>
      )}

      {location.pathname === '/contacts' && (
        <>
          <h1>Контакты</h1>
          <p>+7 (999) 123-45-67</p>
        </>
      )}

      {location.pathname !== '/news' && 
       location.pathname !== '/about' && 
       location.pathname !== '/contacts' && (
        <>
          <h1>404</h1>
          <p>Страница не найдена</p>
        </>
      )}
    </article>
  );
}
