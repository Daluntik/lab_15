import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="homepage_section">
        <div className="homepage_aside">
        </div>
        <article className="homepage_article">
          <h1>Новости</h1>
          <p>Добро пожаловать на наш сайт. Здесь вы найдёте актуальную информацию о событиях и обновлениях.</p>
        </article>
        <aside className="homepage_sidebar">
          <h3>Об авторе</h3>
          <p>Лунтовская Дарья Дмитриевна</p>
        </aside>
      </div>
    </div>
  );
};

export default HomePage;
