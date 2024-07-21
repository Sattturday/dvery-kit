import { useState } from 'react';

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
  const [firstBtn, setFirstBtn] = useState(currentPage);
  const [secondBtn, setSecondBtn] = useState(currentPage + 1);

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

    // First button: current page
    buttons.push(
      <button
        key={1}
        className={`pagination__button ${
          currentPage === 1 ? 'pagination__button_active' : ''
        }`}
        onClick={() => onPageChange(firstBtn)}
      >
        {firstBtn}
      </button>,
    );

    // Second button: next page
    if (totalPages > 1) {
      buttons.push(
        <button
          key={2}
          className={`pagination__button ${
            currentPage + 1 === 2 ? 'pagination__button_active' : ''
          }`}
          onClick={() => onPageChange(secondBtn)}
        >
          {secondBtn}
        </button>,
      );
    }

    // Ellipsis if there are more pages
    if (totalPages > 3 && currentPage < totalPages - 1) {
      buttons.push(
        <span key="ellipsis" className="pagination__dots">
          ...
        </span>,
      );
    }

    // Last button: last page
    if (totalPages > 2) {
      buttons.push(
        <button
          key={totalPages}
          className={`pagination__button ${
            currentPage === totalPages ? 'pagination__button_active' : ''
          }`}
          onClick={() => onPageChange(totalPages)}
        >
          {totalPages}
        </button>,
      );
    }

    return buttons;
  };

  return (
    <>
      <div className="show-list__block">
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
            className="pagination__button pagination__button_type_prev"
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          />
          {getPaginationButtons()}
          <button
            className="pagination__button pagination__button_type_next"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          />
        </div>
      )}
    </>
  );
};
