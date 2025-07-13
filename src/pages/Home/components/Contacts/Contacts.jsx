import { Social } from '../../../../components/Social';
import './Contacts.scss';

export const Contacts = () => {
  return (
    <section className="contacts" id="contacts">
      <div className="wrapper">
        <h2 className="contacts__title">Контакты</h2>
        <ul className="contacts__list">
          <li className="contacts__container" aria-label="Новочебоксарск-1">
            <ul className="contacts__items">
              <li className="contacts__item">
                <p className="contacts__label">Адрес:</p>
                <p className="contacts__content">
                  г.&nbsp;Новочебоксарск, ул.&nbsp;Винокурова, д.59,
                  ТЦ&nbsp;-&nbsp;цокольный этаж
                </p>
              </li>
              <li className="contacts__item">
                <p className="contacts__label">Телефон:</p>
                <a
                  className="contacts__content contacts__content_tel"
                  href="tel:+79279991040"
                  target="_blank"
                  rel="noreferrer"
                >
                  +7-927-999-10-40
                </a>
              </li>
              <li className="contacts__item">
                <p className="contacts__label">Эл.почта:</p>
                <a
                  className="contacts__content contacts__content_tel"
                  href="mailto:dverioknaort@mail.ru"
                  target="_blank"
                  rel="noreferrer"
                >
                  dverioknaort@mail.ru
                </a>
              </li>
              <li className="contacts__item">
                <p className="contacts__label">Время работы:</p>
                <p className="contacts__content">Пн – Вс с 9:00 до 19:00</p>
              </li>
            </ul>
          </li>

          <li className="contacts__container" aria-label="Новочебоксарск-2">
            <ul className="contacts__items">
              <li className="contacts__item">
                <p className="contacts__label">Адрес:</p>
                <p className="contacts__content contacts__content_small">
                  г.&nbsp;Новочебоксарск, ул.&nbsp;10&nbsp;Пятилетки, д.23а,
                  2&nbsp;этаж, офис&nbsp;31
                </p>
              </li>
              <li className="contacts__item">
                <p className="contacts__label">Телефон:</p>
                <a
                  className="contacts__content contacts__content_tel"
                  href="tel:+79279991827"
                  target="_blank"
                  rel="noreferrer"
                >
                  +7-927-999-18-27
                </a>
              </li>
              <li className="contacts__item">
                <p className="contacts__label">Эл.почта:</p>
                <a
                  className="contacts__content contacts__content_tel"
                  href="mailto:dverioknaort@mail.ru"
                  target="_blank"
                  rel="noreferrer"
                >
                  dverioknaort@mail.ru
                </a>
              </li>
              <li className="contacts__item">
                <p className="contacts__label">Время работы:</p>
                <p className="contacts__content">Пн – Вс с 9:00 до 18:00</p>
                <p className="contacts__content">Сб с 9:00 до 17:00</p>
                <p className="contacts__content">Вс с 9:30 до 15:00</p>
              </li>
            </ul>
          </li>

          <li className="contacts__container" aria-label="Социальные сети">
            <div className="contacts__item">
              <p className="contacts__label contacts__label_desktop">
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
