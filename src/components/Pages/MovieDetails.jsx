import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadMovie, clearMovie } from '../../store/actions';
import { FaStar } from 'react-icons/fa';

import Loader from '../Layout/Loader';

class MovieDetails extends Component {
  async componentDidMount() {
    const { id } = this.props.match.params;
    setTimeout(() => this.props.loadMovie(id), 2000);
  }

  componentWillUnmount() {
    this.props.clearMovie();
  }

  render() {
    const { movie } = this.props;
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
  }
}

const mapStateToProps = (state) => ({
  movie: state.movieApp.movie
});

const mapDispatchToProps = {
  loadMovie,
  clearMovie
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
