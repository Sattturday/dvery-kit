import { Social } from '../../../../components/Social';
import './Contacts.scss';

export const Contacts = () => {
  return (
    <section className='contacts' id='contacts'>
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
                  г.&nbsp;Канаш, ул.&nbsp;К.Маркса, д.4, Склад&nbsp;№30
                </p>
              </li>
              <li className='contacts__item'>
                <p className='contacts__label contacts__label_desktop'>
                  Телефон:
                </p>
                <a
                  className='contacts__content contacts__content_tel'
                  href='tel:+79373939193'
                  target='_blank'
                  rel='noreferrer'
                >
                  +7-937-393-91-93
                </a>
              </li>
              <li className='contacts__item'>
                <p className='contacts__label contacts__label_desktop'>
                  Эл.почта:
                </p>
                <a
                  className='contacts__content contacts__content_tel'
                  href='mailto:kupectorg21@mail.ru'
                  target='_blank'
                  rel='noreferrer'
                >
                  kupectorg21@mail.ru
                </a>
              </li>
              <li className='contacts__item'>
                <p className='contacts__label contacts__label_desktop'>
                  Время&nbsp;работы:
                </p>
                <p className='contacts__content'>Пн – Пт с 8:00 до 18:00</p>
                <p className='contacts__content'>Сб – Вс с 8:00 до 15:00</p>
              </li>
            </ul>
          </li>

          <li className='contacts__container' aria-label='Новочебоксарск-1'>
            <ul className='contacts__items'>
              <li className='contacts__item'>
                <p className='contacts__label'>Адрес:</p>
                <p className='contacts__content'>
                  г.&nbsp;Новочебоксарск, ул.&nbsp;Винокурова, д.59,
                  ТЦ&nbsp;-&nbsp;цокольный этаж
                </p>
              </li>
              <li className='contacts__item'>
                <p className='contacts__label'>Телефон:</p>
                <a
                  className='contacts__content contacts__content_tel'
                  href='tel:+79279991040'
                  target='_blank'
                  rel='noreferrer'
                >
                  +7-927-999-10-40
                </a>
              </li>
              <li className='contacts__item'>
                <p className='contacts__label'>Эл.почта:</p>
                <a
                  className='contacts__content contacts__content_tel'
                  href='mailto:dverikitnchk@mail.ru'
                  target='_blank'
                  rel='noreferrer'
                >
                  dverikitnchk@mail.ru
                </a>
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
                <p className='contacts__content contacts__content_small'>
                  г.&nbsp;Новочебоксарск, ул.&nbsp;10&nbsp;Пятилетки, д.23а,
                  2&nbsp;этаж, офис&nbsp;32
                </p>
              </li>
              <li className='contacts__item'>
                <p className='contacts__label'>Телефон:</p>
                <a
                  className='contacts__content contacts__content_tel'
                  href='tel:+79279991040'
                  target='_blank'
                  rel='noreferrer'
                >
                  +7-927-999-10-40
                </a>
              </li>
              <li className='contacts__item'>
                <p className='contacts__label'>Эл.почта:</p>
                <a
                  className='contacts__content contacts__content_tel'
                  href='mailto:dverikitnchk@mail.ru'
                  target='_blank'
                  rel='noreferrer'
                >
                  dverikitnchk@mail.ru
                </a>
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
