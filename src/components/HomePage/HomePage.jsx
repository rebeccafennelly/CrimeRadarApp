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


  

  ShowForm = () => { return ((this.state.longitude !== "")  && (this.state.latitude !== "")) ? {form} : null; }

 

  

  render() { 
    const renderLong = (this.state.longitude ==="") ? null : (<p>This is your Longitude: {this.state.longitude}</p>);
    const renderLat = (this.state.latitude ==="") ? null : (<p>This is your Latitude: {this.state.latitude} </p>);


    const form = 
    <form onSubmit={this.handleSubmit}>
    <label>
      Select Month...
      <select month={this.state.month} onChange={this.handleChange}>
        <option value="01">January</option>
        <option value="02">February</option>
        <option value="03">March</option>
        <option value="04">April</option>
        <option value="05">May</option>
        <option value="06">June</option>
        <option value="07">July</option>
        <option value="08">August</option>
        <option value="09">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
    </label>
    <label>
      Select Year...
      <select year={this.state.year} onChange={this.handleChange}>
        <option value="2018">2018</option>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
      </select>
    </label>
    <input type="submit" value="Submit" />
  </form>


    return ( 
      <>
      <Navbar />
      <section className={styles.homeParent}>
       <h1>Crime Radar</h1>
        <p>Welcome to Crime Radar. We are here to help you keep up to date with street crime in your area.</p>
        <p>You tell us the month and postcode in which you wish to search, and we will do all the investigating for you, within a mile radius. 
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