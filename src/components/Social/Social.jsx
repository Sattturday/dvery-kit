import './Social.scss';

export const Social = () => {
  return (
    <ul className='social'>
      <li>
        <a
          className='social__icon social__icon_type_vk'
          href='http://vk.com/dveri_v_novocheboksarsk_dverikit'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='VK'
        />
      </li>
      <li>
        <a
          className='social__icon social__icon_type_viber'
          href='viber://add?number=+79279991040'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Viber'
        />
      </li>
      <li>
        <a
          className='social__icon social__icon_type_whatsapp'
          href='https://wa.me/79279991040'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='WhatsApp'
        />
      </li>
    </ul>
  );
};
