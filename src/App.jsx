import React from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route } from "react-router-dom"

import { Block, Container } from "components/common/layout";
import { Logo, SearchForm, Home, Search } from "components/composite"

import { ErrorBoundary, NotFound } from "components/system";

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
          <Route path="/home" component={Home}/>
          <Route path="/search/:searchQuery?" component={Search}/>
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
