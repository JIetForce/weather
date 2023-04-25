import React from 'react';

const SearchForm = ({ value, handleChange, handleSubmit }) => {
  return (
    <form
      className="weather-form"
      action="search"
      onSubmit={(e) => handleSubmit(e, value)}
    >
      <input
        type="text"
        name="city"
        placeholder="City"
        value={value}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
