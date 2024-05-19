
import React from 'react';
import { Link } from 'react-router-dom';
import { getImageUrl } from '../api';
import './MovieCard.css'; 

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`}>
        <img src={getImageUrl(movie.poster_path)} alt={movie.title} />
        <h3>{movie.title}</h3>
      </Link>
    </div>
  );
};

export default MovieCard;
