import img1 from '../../../../images/delivery-1.jpg';

import './Delivery.scss';

export const Delivery = () => {
  return (
    <section className="delivery" id="delivery">
      <div className="wrapper">
        <div className="delivery__container">
          <img
            src={img1}
            alt="Грузовой автомобиль"
            className="delivery__image"
          />
          <div className="delivery__info">
            <h2 className="delivery__title">Доставка</h2>
            <p className="delivery__description">
              Интересуетесь способами доставки? Мы&nbsp;готовы ответить
              на&nbsp;все ваши вопросы! Наша компания предлагает несколько
              вариантов доставки, которые подойдут для любого клиента. Узнайте
              подробнее о&nbsp;наших услугах и&nbsp;выберите наиболее подходящий
              вариант для&nbsp;вас!
            </p>
            <p className="delivery__description">
              По телефону <span>+7-927-999-10-40</span>{' '}
              <span>"Двери и Окна ОРТ"</span> в г.Новчебоксарске.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
