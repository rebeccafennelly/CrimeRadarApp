import React, { Component } from 'react';
import {Router} from "@reach/router";
import HomePage from "../../components/HomePage"
import Contact from "../../components/Contact"
import CrimesList from "../../components/CrimesList"

class Routes extends Component {

  render() { 
    return ( 
      <Router>
        <HomePage grabLatAndLong={this.props.grabLatAndLong} path="/">
          <CrimesList path="crimeslist" />
        </HomePage>
        <Contact path="contact"/>
      </Router>
     );
  }
}
 
export default Routes;