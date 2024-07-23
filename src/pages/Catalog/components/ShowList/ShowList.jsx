import { useEffect, useState } from 'react';

import { messages } from '../../../../utils/data';
import { ProductCard } from '../ProductCard';

import './ShowList.scss';

export const ShowList = ({
  data,
  message,
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const [firstBtn, setFirstBtn] = useState(null);
  const [secondBtn, setSecondBtn] = useState(null);
  const [thirdBtn, setThirdBtn] = useState(null);

  useEffect(() => {
    if (currentPage === 1 || currentPage === 2) {
      setFirstBtn(1);
      setSecondBtn(2);
      setThirdBtn(3);
    } else if (
      currentPage >= 3 &&
      totalPages > 3 &&
      totalPages - currentPage >= 1
    ) {
      setFirstBtn(currentPage - 1);
      setSecondBtn(currentPage);
      setThirdBtn(currentPage + 1);
    } else if (
      currentPage >= 3 &&
      totalPages > 3 &&
      totalPages === currentPage
    ) {
      setFirstBtn(currentPage - 2);
      setSecondBtn(currentPage - 1);
      setThirdBtn(currentPage);
    }
    window.scrollTo(0, 0);
  }, [currentPage, totalPages]);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const getPaginationButtons = () => {
    const buttons = [];

    buttons.push(
      <span
        key="ellipsis-prev"
        className="pagination__dots pagination__dots_prev"
      >
        {totalPages > 3 && currentPage > 2 ? '...' : ''}
      </span>,
    );

    buttons.push(
      <button
        key={1}
        className={`pagination__button ${
          currentPage === firstBtn ? 'pagination__button_active' : ''
        }`}
        onClick={() => onPageChange(firstBtn)}
      >
        {firstBtn}
      </button>,
    );

    if (totalPages > 1) {
      buttons.push(
        <button
          key={2}
          className={`pagination__button ${
            currentPage === secondBtn ? 'pagination__button_active' : ''
          }`}
          onClick={() => onPageChange(secondBtn)}
        >
          {secondBtn}
        </button>,
      );
    }

    if (totalPages > 2) {
      buttons.push(
        <button
          key={3}
          className={`pagination__button ${
            currentPage === thirdBtn ? 'pagination__button_active' : ''
          }`}
          onClick={() => onPageChange(thirdBtn)}
        >
          {thirdBtn}
        </button>,
      );
    }

    buttons.push(
      <span
        key="ellipsis-next"
        className="pagination__dots pagination__dots_next"
      >
        {totalPages > 3 && currentPage < totalPages - 1 ? '...' : ''}
      </span>,
    );

    return buttons;
  };

  return (
    <>
      <div className="show-list">
        {message ? (
          <p className="info-message">{message}</p>
        ) : data.length !== 0 ? (
          data.map(card => {
            return <ProductCard key={card.id} cardData={card} />;
          })
        ) : (
          <p className="info-message">{messages.searchMessage}</p>
        )}
      </div>
      {data.length !== 0 && (
        <div className="pagination">
          <button
            className={`pagination__button ${
              currentPage === 1 ? 'pagination__button_disable' : ''
            }`}
            onClick={() => onPageChange(1)}
            disabled={currentPage === 1}
          >
            {'<<'}
          </button>
          <button
            className={`pagination__button ${
              currentPage === 1 ? 'pagination__button_disable' : ''
            }`}
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            {'<'}
          </button>
          {getPaginationButtons()}
          <button
            className={`pagination__button ${
              currentPage === totalPages ? 'pagination__button_disable' : ''
            }`}
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            {'>'}
          </button>
          <button
            className={`pagination__button ${
              currentPage === totalPages ? 'pagination__button_disable' : ''
            }`}
            onClick={() => onPageChange(totalPages)}
            disabled={currentPage === totalPages}
          >
            {'>>'}
          </button>
        </div>
      )}
    </>
  );
};
