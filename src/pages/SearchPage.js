
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { searchMovies } from '../api';
import MovieList from '../components/MovieList';
import Pagination from '../components/Pagination';

const SearchPage = () => {
  const query = new URLSearchParams(useLocation().search).get('query');
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMovies = async () => {
      setLoading(true);
      try {
        const response = await searchMovies(query, page);
        setMovies(response.data.results);
        setTotalPages(response.data.total_pages);
      } catch (error) {
        console.error('Error searching movies:', error);
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
  }, [query, page]);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <MovieList movies={movies} />
      <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
    </div>
  );
};

export default SearchPage;
