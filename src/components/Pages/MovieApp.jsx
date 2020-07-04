import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadMovies } from '../../store/actions';
import MovieList from '../Movie/MovieList';

import Loader from '../Layout/Loader';

class MovieApp extends Component {
  async componentDidMount() {
    setTimeout(() => this.props.loadMovies(), 2000);
  }

  render() {
    const { movies } = this.props;
    return <>{!movies.length ? <Loader /> : <MovieList movies={movies} />}</>;
  }
}

const mapStateToProps = (state) => ({
  movies: state.movieApp.movies
});

const mapDispatchToProps = {
  loadMovies
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieApp);
