import React from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route, Link, useParams } from "react-router-dom"

import { Block, Container, Label} from "components/common/layout";
import { Button } from "components/common/inputs";
import {Logo, Toggler, MovieGrid } from "components/composite"

import { ErrorBoundary } from 'components/system';

const App = () => (
  <Router>
    <ErrorBoundary>
      <Container fixed>
        
        <Block>

          <Block>
            <Logo/>
          </Block>

          <Block flex>
            <SearchForm/>
          </Block>
                   
        </Block>

        <Switch>
          <Route path="/home" component={HomePage}/>
          <Route path="/search/:searchQuery?" component={SearchPage}/>

          <Redirect exact from='/' to='/home' />
          <Route component={NotFound}/>
        </Switch>

        <Block flex>
          <Logo/>
        </Block>

      </Container>
    </ErrorBoundary>    
  </Router>    
);

export default App;

const NotFound = () => (
  <Block>
    <h1>Error - NotFound</h1>
  </Block>
)

const HomePage = () => (
  <Block>    
    <Block flex style={{justifyContent: "flex-end"}}>
      <Block>
        <Label text="Search By"/>
        <Toggler options={["release date", "rating"]} onChange={ value => console.log("Sort:", value)} />
      </Block>
    </Block>
    <MovieGrid movies={[]}/>
  </Block>  
);

const SearchPage = () => {
  const message = `${7} movies was found`;
  return (
    <Block>    
      <Block flex style={{justifyContent: "space-between"}}>
        <Label text={message}/>
        <Block>
          <span>Search By</span>
          <Toggler options={["release date", "rating"]} onChange={ value => console.log("Sort:", value)} />
        </Block>
      </Block>
      <MovieGrid movies={[]}/>
    </Block>
  );
}

const SearchForm = () => {
  const { searchQuery } = useParams();
  return (
    <Block>
      <h1>Find your movie</h1>
      <Block tag="form">
        <input></input>
        <Button primary label="Search"/>
      </Block>
      <Block>
        <span>Search By</span>
        <Toggler options={["title", "genre"]} onChange={ value => console.log("Search property:", value)} />
      </Block>
    </Block>    
  );
}

