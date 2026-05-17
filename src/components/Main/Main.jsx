import Aside from './Aside/Aside';
import Article from './Article/Article';
import Section from './Section/Section';
import './Main.css';

export default function Main() {
  return (
    <main className="main">
      <Section />
      <Article />
      <Aside />
    </main>
  );
}
