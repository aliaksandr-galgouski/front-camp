import React from "react";
import {Switch, Redirect, Route} from "react-router-dom"

import {Container} from "components/common/layout";
import {NotFound} from "components/common/system";
import Header from "components/header";
import Footer from "components/footer/index";

import HomePage from "containers/HomePage";

const App = () => {
  return (
    <Container fixed>        
      <Header/>

      <Switch>
        <Route path="/home" component={HomePage}/>
        {/* <Route path="/search/:searchQuery?" component={Search}/> */}
        <Redirect exact from="/" to="/home" />
        <Route component={NotFound}/>
      </Switch>

      <Footer/>      
    </Container>
  );
}

export default App;
