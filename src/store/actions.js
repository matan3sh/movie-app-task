import movieService from '../services/movieService';

export const loadMovies = (filter) => async (dispatch) => {
  if (!filter) filter = '';
  try {
    const res = await movieService.query();
    const movies = res.filter((movie) =>
      movie.name.toLowerCase().includes(filter.toLowerCase())
    );
    dispatch({ type: 'SET_MOVIES', payload: movies });
  } catch (err) {
    console.log(err);
  }
};

export const loadMovie = (id) => async (dispatch) => {
  try {
    const res = await movieService.getById(id);
    dispatch({ type: 'SET_MOVIE', payload: res });
  } catch (err) {
    console.log(err);
  }
};

export const clearMovie = () => async (dispatch) => {
  try {
    dispatch({ type: 'CLEAR_MOVIE' });
  } catch (err) {
    console.log(err);
  }
};
