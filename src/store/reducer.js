const initialState = {
  movies: [],
  movie: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_MOVIES':
      return {
        ...state,
        movies: action.payload
      };
    case 'SET_MOVIE':
      return {
        ...state,
        movie: action.payload
      };
    case 'CLEAR_MOVIE':
      return {
        ...state,
        movie: null
      };
    default:
      return state;
  }
}
