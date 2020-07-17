import React, { Component } from "react";
import './App.css';
import Routes from "./containers/Routes"

class App extends Component {

  render(){
  return (
      <>
     <Routes grabLatAndLong={this.grabLatAndLong}/>

      </>
      
    );
  }
}


export default App;
