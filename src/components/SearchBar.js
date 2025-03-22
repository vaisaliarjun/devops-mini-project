// src/components/SearchBar.js
import React from 'react';

const SearchBar = ({ query, setQuery, search }) => {
  return (
    <input
      type="text"
      className="search-bar"
      placeholder="Search for a district..."
      onChange={(e) => setQuery(e.target.value)}
      value={query}
      onKeyPress={search}
    />
  );
};

export default SearchBar;
