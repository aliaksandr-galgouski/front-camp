import {fetchAll} from "services/movie.service";

export const FETCH_MOVIES_PENDING = "SEARCH_FETCH_MOVIES_PENDING";
export const FETCH_MOVIES_SUCCESS = "SEARCH_FETCH_MOVIES_SUCCESS";
export const FETCH_MOVIES_ERROR = "SEARCH_FETCH_MOVIES_ERROR";

const fetchMoviesPending = () => {
  return {
    type: FETCH_MOVIES_PENDING
  }
}

const fetchMoviesSuccess = movies => {
  return {
    type: FETCH_MOVIES_SUCCESS,
    payload: movies,
  }
}

const fetchMoviesError = error => {
  return {
    type: FETCH_MOVIES_ERROR,
    payload: error,
  }
}

export const searchMovies = (search, searchBy, sortBy, offset = 0, limit = 20) => {
  return dispatch => {  
    dispatch(fetchMoviesPending());
    fetchAll(offset, limit, sortBy, search, searchBy)
      .then(response => dispatch(fetchMoviesSuccess(response.data)))
      .catch(error => dispatch(fetchMoviesError(error)));
  }
}

export const SET_SORT_BY = "SEARCH_SET_SORT_BY";
export const setSortBy = sortBy => {
  return {
    type: SET_SORT_BY,
    payload: sortBy,
  }
}

export const SET_SEARCH_BY = "SEARCH_SET_SEARCH_BY";
export const setSearchBy = searchBy => {
  return {
    type: SET_SEARCH_BY,
    payload: searchBy,
  }
}
