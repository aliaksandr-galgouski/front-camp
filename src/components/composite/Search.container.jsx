import React from "react";
import { Block, Label } from "components/common/layout";

import { Toggler, MovieGrid } from ".";

class Search extends React.Component {
  constructor(props){
    super(props);

    this.toggleSort = this.toggleSort.bind(this);
  }

  toggleSort(value) {
    console.log("Sorting by:", value)
  }

  render() {
    const message = `${7} movies was found`;

    return (
      <Block>    
        <Block flex style={{justifyContent: "space-between"}}>
          <Label text={message}/>
          <Block>
            <span>Search By</span>
            <Toggler options={["release date", "rating"]} onChange={this.toggleSort} />
          </Block>
        </Block>
        <MovieGrid movies={[]}/>
      </Block>
    );
  }
}

export default Search;
