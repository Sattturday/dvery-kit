import img1 from '../../../../images/icons/1.svg';
import img2 from '../../../../images/icons/2.svg';
import img3 from '../../../../images/icons/3.svg';
import img4 from '../../../../images/icons/4.svg';
import img5 from '../../../../images/icons/5.svg';
import img6 from '../../../../images/icons/6.svg';

import './About.scss';

export const About = () => {
  return (
    <section className="about">
      <div className="wrapper">
        <h2 className="about__title">Почему выбирают нас?</h2>
        <ul className="about__list">
          <li className="about__item">
            <img className="about__img" src={img1} alt="Иконка преимущества" />
            <h3 className="about__subtitle">Гарантия качества</h3>
            <p className="about__description">
              Мы гарантируем качество наших дверей. Все наши изделия проходят
              строгий контроль качества, что гарантирует их долговечность
              и&nbsp;надежность.
            </p>
          </li>
          <li className="about__item">
            <img className="about__img" src={img2} alt="Иконка преимущества" />
            <h3 className="about__subtitle">Низкие цены</h3>
            <p className="about__description">
              У нас самые низкие цены на двери! Мы работаем напрямую
              с&nbsp;производителями, что позволяет нам предлагать нашим
              клиентам лучшие условия.
            </p>
          </li>
          <li className="about__item">
            <img className="about__img" src={img3} alt="Иконка преимущества" />
            <h3 className="about__subtitle">Фабричное производство</h3>
            <p className="about__description">
              Мы работаем только с&nbsp;проверенными производителями, поэтому
              вы&nbsp; можете быть уверены в&nbsp;качестве нашей продукции.
            </p>
          </li>
          <li className="about__item">
            <img className="about__img" src={img4} alt="Иконка преимущества" />
            <h3 className="about__subtitle">Замер</h3>
            <p className="about__description">
              Нужен замер? Мы&nbsp;предлагаем услугу замера мастером. Наш
              специалист приедет к&nbsp;вам домой или в&nbsp;офис, проведет все
              необходимые измерения и&nbsp;поможет определиться с&nbsp;выбором
              двери.
            </p>
          </li>
          <li className="about__item">
            <img className="about__img" src={img5} alt="Иконка преимущества" />
            <h3 className="about__subtitle">Доставка</h3>
            <p className="about__description">
              Наша служба доставки работает быстро и&nbsp;аккуратно,
              а&nbsp;стоимость доставки рассчитывается индивидуально
              для&nbsp;каждого клиента.
            </p>
          </li>
          <li className="about__item">
            <img className="about__img" src={img6} alt="Иконка преимущества" />
            <h3 className="about__subtitle">Монтаж</h3>
            <p className="about__description">
              Мы предлагаем профессиональный монтаж дверей. Наши специалисты
              имеют большой опыт работы и&nbsp;знают все тонкости установки
              различных типов дверей.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};
