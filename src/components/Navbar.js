
import React, { useState, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import _ from 'lodash';

const Navbar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const debounceSearch = useCallback(
    _.debounce((searchTerm) => {
      if (searchTerm.trim()) {
        navigate(`/search?query=${searchTerm}`);
      }
    }, 500),
    []
  );

  const handleSearch = (e) => {
    const { value } = e.target;
    setQuery(value);
    debounceSearch(value);
  };

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/top-rated">Top Rated</Link>
      <Link to="/upcoming">Upcoming</Link>
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={handleSearch}
      />
    </nav>
  );
};

export default Navbar;
