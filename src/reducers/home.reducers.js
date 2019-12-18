import {FETCH_MOVIES_PENDING, FETCH_MOVIES_SUCCESS,FETCH_MOVIES_ERROR} from 'actions/home.actions';

const initialState = {
  pending: false,
  movies: [],
  error: null
}

const moviesReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_MOVIES_PENDING: 
      return {...initialState, pending: true}
    case FETCH_MOVIES_SUCCESS:
      return {...state, pending: false, movies: action.payload}
    case FETCH_MOVIES_ERROR:
      return {...state, pending: false, error: action.payload }
    default: 
      return state;
  };
};

export default moviesReducer;

export const getMovies = state => state.home.movies;
export const getMoviesPending = state => state.home.pending;
export const getMoviesError = state => state.home.error;
