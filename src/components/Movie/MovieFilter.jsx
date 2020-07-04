import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadMovies } from '../../store/actions';

class MovieFilter extends Component {
  state = { txt: '' };

  onChange = ({ target }) => {
    const field = target.name;
    const value = target.value;
    this.setState(
      ({ txt }) => ({ ...txt, [field]: value }),
      () => {
        this.props.loadMovies(this.state.txt);
      }
    );
  };

  render() {
    return (
      <div className='filter'>
        <input
          type='text'
          name='txt'
          placeholder='Search Movie...'
          onChange={this.onChange}
        />
        <i className='fas fa-search' style={{ color: '#ccc' }}></i>
      </div>
    );
  }
}

const mapDispatchToProps = {
  loadMovies
};

export default connect(null, mapDispatchToProps)(MovieFilter);
