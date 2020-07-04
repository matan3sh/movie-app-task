import React from 'react';

const Loader = () => (
  <img
    src='https://cdn.lowgif.com/small/ca57ffab6bd08097-ajax-loading-gif-transparent-background-12-gif-images.gif'
    alt='Loading...'
    style={loaderStyle}
  />
);

const loaderStyle = {
  margin: 'auto',
  width: '20%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

export default Loader;
