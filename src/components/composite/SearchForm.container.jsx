import React from "react";
import { withRouter } from "react-router-dom";
import { Block } from "components/common/layout";
import { Button } from "components/common/inputs";

import { Toggler } from ".";

class SearchForm extends React.Component {
  constructor(props){
    super(props);

    this.doSearch =this.doSearch.bind(this);
    this.toggleSearch =this.toggleSearch.bind(this);
  }

  doSearch() {
    this.props.history.push('/search');
  }

  toggleSearch(value) {
    console.log("Search property:", value)
  }

  render() {
    return (
      <Block>
        <h1>Find your movie</h1>
        <Block tag="form">
          <input></input>
          <Button primary label="Search" onClick={this.doSearch}/>
        </Block>
        <Block>
          <span>Search By</span>
          <Toggler options={["title", "genre"]} onToggle={this.toggleSearch} />
        </Block>
      </Block>
    );
  }
}

export default withRouter(SearchForm);
