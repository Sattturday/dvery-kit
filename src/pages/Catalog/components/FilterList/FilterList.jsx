import React from 'react';

import { InputCheckbox } from '../../../../components/InputCheckbox/InputCheckbox';
import { filterOptions } from '../../../../utils/filterData';
import { FilterCheckbox } from '../FilterCheckbox/FilterCheckbox';
import { InputSelect } from '../InputSelect/InputSelect';

import './FilterList.scss';
import { DoubleRange } from '../DoubleRange/DoubleRange';

export function FilterList({
  handleSubmit,
  filter,
  checkboxHandler,
  selectHandler,
  radioHandler,
  onMenuClick,
}) {
  return (
    <aside className='filter'>
      {/* <button type='button' onClick={onMenuClick}></button> */}

      {filterOptions.map((block, index) => {
        return (
          <div key={block.id} className='filter__wrapper'>
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
                  type='radio'
                  isChecked={filter['type'] === block.category}
                  onChange={() => {
                    selectHandler(block.category);
                  }}
                />
                {block.items && (
                  <ul className='filter__list'>
                    {block.items.map((item) => {
                      return (
                        <li>
                          <InputCheckbox
                            option={{
                              name: item.title,
                              slug: item.category,
                            }}
                            type='radio'
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
      <DoubleRange />
    </aside>
  );
}
