import Section from './Section';
import Article from './Article';
import Aside from './Aside';
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