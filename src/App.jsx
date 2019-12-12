import React from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route, Link, useParams } from "react-router-dom"

import { Block, Container, Label} from "components/common/layout";
import { Button, ButtonGroup } from "components/common/inputs";
import {Logo, Toggler, MovieGrid } from "components/composite"

import ErrorBoundary from './components/system/error-bondary/ErrorBoundary.component';

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
          <Route path="/search/:searchQuery?" component={SearchForm}/>
          <Route path="/search/:searchQuery?" component={SearchForm}/>

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
    <h1>Error</h1>
  </Block>
)

const HomePage = () => (
  <Block>    
    <Block>
      <h1>Home Page</h1>
    </Block>
    <MovieGrid movies={[]}/>
  </Block>  
);

const SearchForm = () => {
  const { searchQuery } = useParams();
  return (
    <Block>
      <h1>Find your movie</h1>
      <Block>
        <input></input>
        <Button label="Search"/>
      </Block>
      <div>
        <span>Search By</span>
        <Toggler options={["title", "genre"]} onChange={ value => console.log("Search property:", value)} />
      </div>
    </Block>    
  );
}

