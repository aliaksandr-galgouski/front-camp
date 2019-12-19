import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import {Block, Label} from "components/common/layout";
import MoviesGridItem from "components/movies-grid-item/";

import styles from "./MoviesGrid.module.css";


const MoviesGrid = ({movies}) => {
  return movies.length ? (
    <Block className={styles.root}>
      {movies.map(movie => (
        <Link to={`/movie/${movie.id}`} key={movie.id} className={styles.item}>
          <MoviesGridItem title={movie.title} imgUrl={movie.poster_path} date={movie.release_date} genres={movie.genres}/>
        </Link>
      ))}
    </Block>
  ) : (
    <Block flex>
      <Label tag="h1" text="No films found"/>
    </Block>
  );
};

MoviesGrid.propTypes = {  
  movies: PropTypes.arrayOf(
    PropTypes.shape({id: PropTypes.number.isRequired}).isRequired
  ).isRequired  
};

MoviesGrid.defaultProps = {
  movies: []
};

export default MoviesGrid;
