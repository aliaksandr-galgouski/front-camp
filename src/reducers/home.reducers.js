import {SET_SORT_BY, FETCH_MOVIES_PENDING, FETCH_MOVIES_SUCCESS,FETCH_MOVIES_ERROR} from 'containers/home';

const initialState = {
  sortBy: "rating",
  pending: false,
  movies: [],
  error: null
}

const moviesReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_SORT_BY:
      return {...state, sortBy: action.payload};
    case FETCH_MOVIES_PENDING: 
      return {...state, pending: true, movies: [], error: null};
    case FETCH_MOVIES_SUCCESS:
      return {...state, pending: false, movies: action.payload};
    case FETCH_MOVIES_ERROR:
      return {...state, pending: false, error: action.payload};
    default: 
      return state;
  };
};

export default moviesReducer;
