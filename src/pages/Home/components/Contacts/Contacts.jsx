import { Social } from '../../../../components/Social';
import './Contacts.scss';

export const Contacts = () => {
  return (
    <section className='contacts'>
      <div className='wrapper'>
        <h2 className='contacts__title'>Контакты</h2>
        <ul className='contacts__list'>
          <li className='contacts__container' aria-label='Канаш'>
            <ul className='contacts__items'>
              <li className='contacts__item'>
                <p className='contacts__label contacts__label_desktop'>
                  Адрес:
                </p>
                <p className='contacts__content'>
                  г. Канаш, ул. К.Маркса д.4, Склад №30
                </p>
              </li>
              <li className='contacts__item'>
                <p className='contacts__label contacts__label_desktop'>
                  Телефон:
                </p>
                <p className='contacts__content'>+7-937-393-91-93</p>
              </li>
              <li className='contacts__item'>
                <p className='contacts__label contacts__label_desktop'>
                  Эл.почта:
                </p>
                <p className='contacts__content'>kupectorg21@mail.ru</p>
              </li>
              <li className='contacts__item'>
                <p className='contacts__label contacts__label_desktop'>
                  Время работы:
                </p>
                <p className='contacts__content'>Пн – Пт с 8:00 до18:00</p>
                <p className='contacts__content'>Сб – Вс с 8:00 до15:00</p>
              </li>
            </ul>
          </li>

          <li className='contacts__container' aria-label='Новочебоксарск-1'>
            <ul className='contacts__items'>
              <li className='contacts__item'>
                <p className='contacts__label'>Адрес:</p>
                <p className='contacts__content'>
                  г. Новочебоксарск, ул. Винокурова д.59, ТЦ - цокольный этаж
                </p>
              </li>
              <li className='contacts__item'>
                <p className='contacts__label'>Телефон:</p>
                <p className='contacts__content'>+7-927-999-10-40</p>
              </li>
              <li className='contacts__item'>
                <p className='contacts__label'>Эл.почта:</p>
                <p className='contacts__content'>dverikitnchk@mail.ru</p>
              </li>
              <li className='contacts__item'>
                <p className='contacts__label'>Время работы:</p>
                <p className='contacts__content'>Пн – Вс с 9:00 до 20:00</p>
              </li>
            </ul>
          </li>

          <li className='contacts__container' aria-label='Новочебоксарск-2'>
            <ul className='contacts__items'>
              <li className='contacts__item'>
                <p className='contacts__label'>Адрес:</p>
                <p className='contacts__content'>
                  г. Новочебоксарск, ул. 10 Пятилетки, д.23а, 2 этаж, офис 32
                </p>
              </li>
              <li className='contacts__item'>
                <p className='contacts__label'>Телефон:</p>
                <p className='contacts__content'>+7-927-999-10-40</p>
              </li>
              <li className='contacts__item'>
                <p className='contacts__label'>Эл.почта:</p>
                <p className='contacts__content'>dverikitnchk@mail.ru</p>
              </li>
              <li className='contacts__item'>
                <p className='contacts__label'>Время работы:</p>
                <p className='contacts__content'>Пн – Вс с 9:00 до 18:00</p>
                <p className='contacts__content'>Сб – Вс с 9:00 до15:00</p>
              </li>
            </ul>
          </li>

          <li className='contacts__container' aria-label='Социальные сети'>
            <div className='contacts__item'>
              <p className='contacts__label contacts__label_desktop'>
                Социальные сети:
              </p>
              <Social />
            </div>
          </li>
        </ul>
        ;
      </div>
    </section>
  );
};
