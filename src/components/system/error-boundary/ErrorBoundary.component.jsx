import React from "react";
import { Redirect, withRouter } from "react-router-dom";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };    
  }

  static getDerivedStateFromError(error) { 
    return { error };
  }

  componentDidMount() {  
    this.props.history.listen(()=> this.setState({}));
  }

  componentDidCatch(error, info) {  
    console.log(error, info);
  }

  render() {
    if (this.state.error) {
      return <Redirect to="/error"/>;
    }

    return this.props.children;
  }
}

export default withRouter(ErrorBoundary);
