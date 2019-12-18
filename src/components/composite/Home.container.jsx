import React from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import { Block, Label } from "components/common/layout";

import { Toggler, MovieGrid } from ".";

import {fetchMovies} from 'actions/home.actions';
import {getMovies, getMoviesPending, getMoviesError} from 'reducers/home.reducers';

class Home extends React.Component {
  constructor(props){
    super(props);
    this.toggleSort = this.toggleSort.bind(this);
  }

  componentDidMount() {
    this.props.fetchMovies();
  }

  toggleSort(value) {
    console.log("Sorting by:", value)
  }

  render() {
    const {movies, error, pending} = this.props;

    return pending ? (
      <Block><h1>Loading</h1></Block>
    ) : (
      <Block>    
        <Block flex style={{justifyContent: "flex-end"}}>
          <Block>
            <Label text="Search By"/>
            <Toggler options={["release date", "rating"]} onToggle={this.toggleSort} />
          </Block>
        </Block>
        <MovieGrid movies={movies}/>
      </Block>
    );
  }
}

const mapStateToProps = state => ({
  pending: getMoviesPending(state),
  error: getMoviesError(state),
  movies: getMovies(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchMovies: fetchMovies
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);