import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import { Block, Label } from "components/common/layout";
import MovieGrid from "components/movies-grid";
import ButtonToggler from "components/button-toggler";

import {setSortBy, fetchMovies} from "./Home.actions";
import {getSortBy, getMovies, getMoviesPending, getMoviesError} from "./Home.selectors";

class Home extends React.Component {
  constructor(props){
    super(props);
    this.toggleSortBy = this.toggleSortBy.bind(this);
  }

  componentDidMount() {
    this.props.fetchMovies(this.props.sortBy);
  }

  toggleSortBy(value) {
    this.props.setSortBy(value);
    this.props.fetchMovies(value);
  }

  render() {
    const {movies, error, pending} = this.props;

    return (
      <Block>
        <Block flex>
          <ButtonToggler options={["release date", "rating"]} onToggle={this.toggleSortBy}/>
        </Block>
        <Block flex>
          {pending 
            ? <Label tag="h1" text="Loading..."/> 
            : <MovieGrid movies={movies}/>
          }
        </Block>        
      </Block>   
    );   
  }  
}

const mapStateToProps = state => ({
  sortBy: getSortBy(state),
  pending: getMoviesPending(state),
  error: getMoviesError(state),
  movies: getMovies(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
  setSortBy: setSortBy,
  fetchMovies: fetchMovies
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
