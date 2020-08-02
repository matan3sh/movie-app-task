import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loadMovies } from '../../store/actions';

const MovieFilter = ({ loadMovies }) => {
  const [txt, setTxt] = useState('');
  return (
    <div className='filter'>
      <input
        type='text'
        name='txt'
        placeholder='Search Movie...'
        onChange={(e) => {
          setTxt(e.target.value);
          loadMovies(txt);
        }}
      />
      <i className='fas fa-search' style={{ color: '#ccc' }}></i>
    </div>
  );
};

const mapDispatchToProps = {
  loadMovies
};

export default connect(null, mapDispatchToProps)(MovieFilter);
