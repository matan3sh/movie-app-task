import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadMovie, clearMovie } from '../../store/actions';
import { FaStar } from 'react-icons/fa';

import Loader from '../Layout/Loader';

const MovieDetails = ({ movie, match, loadMovie, clearMovie }) => {
  useEffect(() => {
    const { id } = match.params;
    setTimeout(() => loadMovie(id), 2000);
    return () => {
      clearMovie();
    };
    // eslint-disable-next-line
  }, [loadMovie, clearMovie]);

  return (
    <>
      {movie === null ? (
        <Loader />
      ) : (
        <div className='movie-details-wrapper'>
          <img src={movie.imageUrl} alt='' />
          <div className='movie-details'>
            <h2>{movie.name}</h2>
            <div className='movie-details-inner'>
              <p>
                {movie.category}, {movie.year}
              </p>
              <div>
                <span>{movie.rate}/10</span>
                <FaStar className='star' color={'#ffc107'} size={25} />
              </div>
            </div>
            <p className='movie-desc'>{movie.description}</p>
            <p className='next-feature'>
              Next Feature: <span className='hour'>{movie.hour}</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  movie: state.movieApp.movie
});

const mapDispatchToProps = {
  loadMovie,
  clearMovie
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
