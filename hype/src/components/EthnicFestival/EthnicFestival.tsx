import { useState } from "react";
import "./EthnicFestival.css";
import Hype from '../../assets/hypyat.jpg';
import Hype2 from '../../assets/hype2.jpg';
import Hype3 from '../../assets/hype3.jpg';
import Hype4 from '../../assets/hype4.webp';

export default function EthnicFestival() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [Hype, Hype2, Hype3, Hype4];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 3) % images.length); // Переходим на 3 картинки вперед
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 3 + images.length) % images.length); // Переходим на 3 картинки назад
  };

  const getDisplayedImages = () => {
    const firstIndex = currentSlide;
    const secondIndex = (currentSlide + 1) % images.length;
    const thirdIndex = (currentSlide + 2) % images.length;
    return [images[firstIndex], images[secondIndex], images[thirdIndex]];
  };

  const [faqOpen, setFaqOpen] = useState<number | null>(null);


  const faqs = [
    {
      question: "С какими партнерами вы работаете?",
      answer: "Наши партнеры — крупнейшие музыкальные компании и культурные центры."
    },
    {
      question: "Какие муз. инструменты используются?",
      answer: "На фестивале звучат традиционные этнические инструменты разных народов мира."
    },
    {
      question: "Какие певцы или артисты будут выступать?",
      answer: "Список участников можно найти на официальном сайте фестиваля."
    },
    {
      question: "Кто является организатором фестиваля?",
      answer: "Санкт-Петербургский государственный музей театрального и музыкального искусства."
    }
  ];

  return (
    <div className="festival-container">
      {/* Header */}
      <header className="festival-header">
        <span className="festival-logo">logo</span>
        <nav>
          <ul className="festival-nav">
            <li>Отзывы</li>
            <li>О нас</li>
            <li>Контакты</li>
          </ul>
        </nav>
      </header>

      {/* Main Section */}
      <section className="festival-main">
        <h1>ЭТНИЧЕСКИЙ ФЕСТИВАЛЬ</h1>
        <h2>МУЗЫКИ МИРА</h2>
        <button className="festival-register">Регистрация</button>
      </section>

      {/* Slider Section */}
      <section className="festival-slider">
        <button className="slider-btn left" onClick={prevSlide}>
          ◀
        </button>
        <div className="slider-images">
          {getDisplayedImages().map((image, index) => (
            <img key={index} src={image} alt={`Фестиваль ${index + 1}`} className="slider-image" />
          ))}
        </div>
        <button className="slider-btn right" onClick={nextSlide}>
          ▶
        </button>
      </section>

      {/* Info Section */}
      <section className="festival-info">
        <div className="info-text">
          <h3>Информация о фестивале</h3>
          <p>Этнический фестиваль «Музыки мира» в Санкт-Петербурге: Сбор музыкантов из разных регионов России для представления этнической музыки и культуры.</p>
        </div>
        <div className="info-contact">
          <h3>По вопросам участия и партнерства</h3>
          <p><strong>Почта:</strong> example@mail.ru</p>
          <p><strong>Телефон:</strong> +73819994315</p>
          <p><strong>Адрес:</strong> Санкт-Петербург, наб. р. Фонтанки, 34</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="festival-faq">
        <h3>ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</h3>
        <div className="faq-container">
          {faqs.map((item, index) => (
            <div key={index} className="faq-item">
              <button onClick={() => setFaqOpen(faqOpen === index ? null : index)} className="faq-question">
                {item.question}
                <span>{faqOpen === index ? "−" : "＋"}</span>
              </button>
              {faqOpen === index && <div className="faq-answer">{item.answer}</div>}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
