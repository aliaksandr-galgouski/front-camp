import React from "react";
import { Label, Block, GridList } from "components/common/layout";

import MovieGridItem from "./MovieGridItem.component";

const MovieGrid = ({movies = [],  ...props}) => {
  return movies.length
  ? (
    <GridList columnCount="3" columnGap="40px" rowGap="40px" {...props}>
      {movies.map(movie => <MovieGridItem key={movie.id} data={movie} />)}
    </GridList>
    )
  : (
    <Block flex {...props}>
      <Label text="No films found"/>
    </Block>
  );
}

export default MovieGrid;
