import React from "react";
import { Label, Block, GridList } from "components/common/layout";
import MovieGridItem from "./MovieGridItem.component";

const MovieGrid = ({movies = [], ...props }) => {
  if(movies.length){
    return (
      <GridList columnCount="3" columnGap="40px" rowGap="40px">
        {
          movies.map(movie => <MovieGridItem />)
        }
      </GridList>
    );
  } 
  return (
    <Block flex>
      <Label text="No films found"/>
    </Block>
  );
}

export default MovieGrid;
