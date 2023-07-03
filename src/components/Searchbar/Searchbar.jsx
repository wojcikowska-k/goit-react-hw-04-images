import React, { useState } from 'react';

const SearchBar = ({ onSubmit }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = e => {
    const { value } = e.target;
    setSearchValue(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(searchValue);

    setSearchValue('');
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <button className="SearchForm-button" type="submit">
          <span className="SearchForm-button-label">
            <svg
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="-6 -6 34 34"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
          name="searchValue"
          value={searchValue}
        />
      </form>
    </header>
  );
};

export default SearchBar;
