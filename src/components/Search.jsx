// src/components/Search.js
import React from 'react';

const Search = ({ onSearch }) => {
  const handleChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div className="mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search products..."
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;