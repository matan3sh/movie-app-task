import React from 'react';
import MoviePreview from './MoviePreview';

const MovieList = ({ movies }) => {
  return (
    <div className='movie-wrapper'>
      {movies.map((movie) => (
        <MoviePreview movie={movie} key={movie.id} />
      ))}
    </div>
  );
};

export default MovieList;
