import React, { Component } from 'react';
import {Router} from "@reach/router";
import HomePage from "../../components/HomePage"
import Contact from "../../components/Contact"

class Routes extends Component {

  render() { 
    return ( 
      <Router>
        <HomePage grabLatAndLong={this.props.grabLatAndLong} path="/"/>
        <Contact path="contact"/>

        
      </Router>
     );
  }
}
 
export default Routes;