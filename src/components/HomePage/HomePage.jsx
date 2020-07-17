import React, { Component } from 'react';
import Navbar from '../Navbar';
import styles from "./HomePage.module.scss"

class HomePage extends Component {
  state = {
    inputPostcode: "",
    longitude: "",
    latitude:"",
    year:"",
    month: "",
    formVisibility: "false"
  }

  grabLatAndLong = () => {
  
    fetch (`https://api.postcodes.io/postcodes/${this.state.inputPostcode}`)
        .then(res => {
            return res.json();
        })
        .then(data => {
          this.setState ({longitude: data.result.longitude})
          this.setState ({latitude: data.result.latitude})
        })
        .catch(error => {
            console.log(error);

        
        })
  }
        
  handleYearChange = (event)=> {this.setState ({year: event.target.value})}

  handleMonthChange = (event)=>{this.setState ({month: event.target.value})}

  handleSubmit = (event) => {alert("THIS HANDLESUBMIT WILL RUN THE NEXT FETCH TO POLICE API");
    event.preventDefault();
}


  toggleFormVisibility(){
      this.setState = ({formVisibility: "true"}) && <p>I will be the form</p>;
      //     this.state.formIsShown = !this.state.formIsShown;
  }

  ShowForm = (renderLong, renderLat) => {((this.state.longitude !== "") && (this.state.latitude !== "")) ? {toggleFormVisibility()} : null; }
  

  render() { 

  


    const renderLong = (this.state.longitude ==="") ? null : (<p>This is your Longitude: {this.state.longitude}</p>);
    const renderLat = (this.state.latitude ==="") ? null : (<p>This is your Latitude: {this.state.latitude} </p>);
    // const renderFormIf = (this.state.formIsShown)? "I am a form" : null;


    return ( 
      <>
      <Navbar />
      <section className={styles.homeParent}>
       <h1>Crime Radar</h1>
        <p>Welcome to Crime Radar. We are here to help you keep up to date with street crime in your area.</p>
        <p>You tell us the month and postcode you wish to search, and we will do all the investigating for you, within a mile radius. 
        Let's get started! Enter your postcode here...</p>
        <input type="text" name="postcode" placeholder="Enter your postcode..." onInput = {(event)=>this.setState({inputPostcode: event.target.value})}></input>
        <button onClick={this.grabLatAndLong}>Go</button>
      {renderLong}
      {renderLat}
      {this.ShowForm()}
  
      </section>
      </>
     );
  }
}

 
export default HomePage;