import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { DebounceInput } from 'react-debounce-input';
import { FaSearch } from 'react-icons/fa';
import { createPortal } from 'react-dom';
import s from './Searchbar.module.css';
import PropTypes from 'prop-types';

const headerRoot = document.querySelector('#header-root');

const Searchbar = ({ handleQuery }) => {
  const [value, setValue] = useState('');

  const onChange = e => {
    const inputValue = e.target.value;
    setValue(inputValue);
    handleQuery(inputValue);
  };

  const inputId = uuidv4();

  return createPortal(
    <header className={s.header}>
      <div className={s.inputWrapper}>
        <label htmlFor={inputId} className={s.label}>
          <FaSearch className={s.icon} />
          <DebounceInput
            className={s.input}
            debounceTimeout={750}
            id={inputId}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={value}
            onChange={onChange}
          />
        </label>
      </div>
    </header>,
    headerRoot,
  );
};

Searchbar.propTypes = {
  handleQuery: PropTypes.func.isRequired,
};

export { Searchbar };
