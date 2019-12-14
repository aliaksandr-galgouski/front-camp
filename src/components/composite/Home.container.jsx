import React from "react";
import { Block, Label } from "components/common/layout";

import { Toggler, MovieGrid } from ".";

class Home extends React.Component {
  constructor(props){
    super(props);

    this.toggleSort = this.toggleSort.bind(this);
  }

  toggleSort(value) {
    console.log("Sorting by:", value)
  }

  render() {
    return (
      <Block>    
        <Block flex style={{justifyContent: "flex-end"}}>
          <Block>
            <Label text="Search By"/>
            <Toggler options={["release date", "rating"]} onToggle={this.toggleSort} />
          </Block>
        </Block>
        <MovieGrid movies={[]}/>
      </Block>
    );
  }
}

export default Home;
