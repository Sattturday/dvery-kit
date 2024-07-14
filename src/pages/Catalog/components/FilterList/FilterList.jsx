import React from 'react';

import { InputCheckbox } from '../../../../components/InputCheckbox/InputCheckbox';
import { filterOptions } from '../../../../utils/filterData';
import { Button } from '../../../../components/Button/Button';
import { FilterCheckbox } from '../FilterCheckbox/FilterCheckbox';
import { InputSelect } from '../InputSelect/InputSelect';
// import { DoubleRange } from '../DoubleRange/DoubleRange';

import './FilterList.scss';

export function FilterList({
  handleSubmit,
  filter,
  checkboxHandler,
  selectHandler,
  radioHandler,
  onMenuClick,
  windowWidth,
}) {
  return (
    <aside>
      <form className="filter" onSubmit={handleSubmit}>
        {filterOptions.map(block => {
          return (
            <div key={block.id} className="filter__wrapper">
              {block.type === 'checkbox' ? (
                <FilterCheckbox
                  option={{
                    name: block.title,
                    slug: block.category,
                  }}
                  isChecked={filter[block.category]}
                  onChange={() => {
                    checkboxHandler(block.category);
                  }}
                />
              ) : (
                <>
                  <InputSelect
                    option={{
                      name: block.title,
                      slug: block.category,
                    }}
                    type="radio"
                    isChecked={filter['type'] === block.category}
                    onChange={() => {
                      selectHandler(block.category);
                    }}
                  />
                  {block.items && (
                    <ul className="filter__list">
                      {block.items.map(item => {
                        return (
                          <li key={item.id}>
                            <InputCheckbox
                              option={{
                                name: item.title,
                                slug: item.category,
                              }}
                              type="radio"
                              isChecked={
                                filter['category'] === item.category &&
                                filter['type'] === 'interior_door'
                              }
                              onChange={() => {
                                radioHandler(item.category);
                              }}
                            />
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </>
              )}
            </div>
          );
        })}
        {/* <DoubleRange
          handleSubmit={handleSubmit}
          onMenuClick={onMenuClick}
          windowWidth={windowWidth}
        /> */}
        {windowWidth < 750 && (
          <div style={{ paddingTop: '50px' }}>
            <Button
              size="large"
              text="Применить"
              type="button"
              onClick={onMenuClick}
            />
          </div>
        )}
      </form>
    </aside>
  );
}
