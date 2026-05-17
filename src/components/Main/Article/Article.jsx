import { Route, Routes } from 'react-router-dom';
import AboutPage from '../../../pages/AboutPage';
import ContactsPage from '../../../pages/ContactsPage';
import NewsPage from '../../../pages/NewsPage';
import NotFoundPage from '../../../pages/NotFoundPage';
import './Article.css';

export default function Article() {
  return (
    <article className="article">
      <Routes>
        <Route
          path="/"
          element={<NewsPage />}
        />
        <Route
          path="/news"
          element={<NewsPage />}
        />
        <Route
          path="/about"
          element={<AboutPage />}
        />
        <Route
          path="/contacts"
          element={<ContactsPage />}
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </article>
  );
}
