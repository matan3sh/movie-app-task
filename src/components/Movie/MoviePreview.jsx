import React from 'react';
import { Link } from 'react-router-dom';

const MoviePreview = ({ movie }) => {
  return (
    <Link to={`/${movie.id}`}>
      <div className='movie-card'>
        <h2>{movie.name}</h2>
        <h3>{movie.category}</h3>
        <p>{movie.year}</p>
      </div>
    </Link>
  );
};

export default MoviePreview;
