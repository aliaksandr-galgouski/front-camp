import {fetchAll} from "services/movie.service";

export const FETCH_MOVIES_PENDING = "HOME_FETCH_MOVIES_PENDING";
export const FETCH_MOVIES_SUCCESS = "HOME_FETCH_MOVIES_SUCCESS";
export const FETCH_MOVIES_ERROR = "HOME_FETCH_MOVIES_ERROR";

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

export const fetchMovies = (sortBy, offset = 0, limit = 20) => {
  return dispatch => {  
    dispatch(fetchMoviesPending());
    fetchAll(offset, limit, sortBy)
      .then(response => dispatch(fetchMoviesSuccess(response.data)))
      .catch(error => dispatch(fetchMoviesError(error)));
  }
}

export const SET_SORT_BY = "HOME_SET_SORT_BY";
export const setSortBy = sortBy => {
  return {
    type: SET_SORT_BY,
    payload: sortBy,
  }
}
