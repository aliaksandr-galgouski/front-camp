import { combineReducers } from "redux";

import homeReducer from "./home.reducers";
//import searchReducer from "./search.reduser";

export default combineReducers({  
  home: homeReducer,  
  //search: searchReducer,  
  //movieDetail: movieDetailReducer,
});
