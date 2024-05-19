
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails, fetchMovieCast, getImageUrl } from '../api';
import './MovieDetailPage.css'; 

const MovieDetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const loadMovieDetails = async () => {
      try {
        const movieResponse = await fetchMovieDetails(id);
        setMovie(movieResponse.data);
        const castResponse = await fetchMovieCast(id);
        setCast(castResponse.data.cast);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    loadMovieDetails();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="movie-detail">
      <div className="movie-detail-header">
        <img src={getImageUrl(movie.poster_path)} alt={movie.title} className="movie-image" />
        <div className="movie-info">
          <h1>{movie.title}</h1>
          <p><strong>Duration:</strong> {movie.runtime} minutes</p>
          <p><strong>Overview:</strong> {movie.overview}</p>
          <p><strong>Rating:</strong> {movie.vote_average}</p>
        </div>
      </div>
      <h2>Cast</h2>
      <div className="cast-list">
        {cast.map(member => (
          <div key={member.cast_id} className="cast-card">
            <img src={getImageUrl(member.profile_path)} alt={member.name} />
            <div>
              <p><strong>{member.name}</strong></p>
              {member.character && <p>{member.character}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieDetailPage;

