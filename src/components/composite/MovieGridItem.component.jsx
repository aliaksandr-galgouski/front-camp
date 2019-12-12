import React from "react";
import { Label, Block } from "components/common/layout"

const MovieGridItem = ({data = {} ,...props}) => {
  return (
    <Block {...props}>
      <img src={data.imageUrl}/>
      <Block>
        <Label text={data.title}/>
        <Label text={data.date}/>
      </Block>
      <Block>
        <Label text={data.shortNote}/>
      </Block>
    </Block>
  );
}

export default MovieGridItem;