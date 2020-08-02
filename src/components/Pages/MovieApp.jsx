import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadMovies } from '../../store/actions';
import MovieList from '../Movie/MovieList';

import Loader from '../Layout/Loader';

const MovieApp = ({ movies, loadMovies }) => {
  useEffect(() => {
    loadMovies();
  }, [loadMovies]);

  return <>{!movies.length ? <Loader /> : <MovieList movies={movies} />}</>;
};

const mapStateToProps = (state) => ({
  movies: state.movieApp.movies
});

const mapDispatchToProps = {
  loadMovies
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieApp);
