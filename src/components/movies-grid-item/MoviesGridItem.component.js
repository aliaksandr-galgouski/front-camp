import React from "react";
import PropTypes from "prop-types";

import {Block, Label} from "components/common/layout";

import styles from "./MoviesGridItem.module.css"


const MoviesGridItem = ({title, imgUrl, date, genres}) => {
  const genresLine = genres.join(", ");
  const year = (date && date.split("-")[0]) || "None";
  return (
    <Block className={styles.root}>
      <img className={styles.poster} src={imgUrl} alt={`Poster for the "${title}" movie.`}/>
      <Block flex className={styles.titleBlock}>
        <Label tag="h3" text={title}/>
        <Label className={styles.year} text={year}/>
      </Block>    
      <Block>
        <Label text={genresLine}/>
      </Block>
    </Block>
  );
}

MoviesGridItem.propTypes = {  
  title: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired 
};

MoviesGridItem.defaultProps = {
  title: "No title",
  genres: []
};

export default MoviesGridItem;
