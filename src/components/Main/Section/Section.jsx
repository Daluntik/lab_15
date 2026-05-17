import sectionPhoto from '../../../assets/images/section-photo.jpg';
import './Section.css';

export default function Section() {
  return (
    <section className="section">
      <img src={sectionPhoto} alt="Фото раздела" className="section__image" />
    </section>
  );
}
