import img1 from '../../../../images/delivery.jpg';

import './Delivery.scss';

export const Delivery = () => {
  return (
    <section className='delivery'>
      <div className='wrapper'>
        <div className='delivery__container'>
          <img
            src={img1}
            alt='Грузовой автомобиль'
            className='delivery__image'
          />
          <div className='delivery__info'>
            <h2 className='delivery__title'>Доставка</h2>
            <p className='delivery__description'>
              Интересуетесь способами доставки? Мы готовы ответить на все ваши
              вопросы! Наша компания предлагает несколько вариантов доставки,
              которые подойдут для любого клиента. Узнайте подробнее о наших
              услугах и выберите наиболее подходящий вариант для вас!
            </p>
            <p className='delivery__description'>
              По телефону +7-937-393-91-93 – Двери-КИТ в г.Канаше,
              или&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              +7-927-999-10-40 Двери-КИТ в г.Новчебоксарске.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
