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
    crimes: []
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

  handleSubmit = (event) => {

    

    event.preventDefault();
    fetch (`https://data.police.uk/api/outcomes-at-location?date=${this.state.year}-${this.state.month}&lat=${this.state.latitude}&lng=${this.state.longitude}`)
        .then(res => {
          return res.json(); 
        })
        .then(jsonObj => {
          const crimes = jsonObj
          const cleanCrimesArray = crimes.map((crime) => {
            return {
              heading: crime.crime.category,
              street: crime.crime.location.street.name,
              category: crime.category.name
            }
          })
          this.setState({ crimes: cleanCrimesArray}) 
        })
        .catch(error => {
          console.log(error);
        })
  }
  
        // Also want function to take me to a new page with my list of Crimes on 


  

  handleYearChange = (event)=> {this.setState ({year: event.target.value})}


  handleMonthChange = (event)=>{this.setState ({month: event.target.value})}

  // ShowForm = () => { return ((this.state.longitude !== "")  && (this.state.latitude !== "")) ? {form} : null; 

  render() { 



    const renderLong = (this.state.longitude ==="") ? null : (<p>This is your Longitude: {this.state.longitude}</p>);
    const renderLat = (this.state.latitude ==="") ? null : (<p>This is your Latitude: {this.state.latitude} </p>);
    const form = 
    <form className="form">
    <label>
      Select Month...
      <select month={this.state.month} onChange={this.handleMonthChange}>
        <option defaultValue="00">Month</option>
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
      <select year={this.state.year} onChange={this.handleYearChange}>
      <option defaultValue="0000">Year</option>
        <option value="2018">2018</option>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
      </select>
    </label>
    <input type="submit" value="Submit" onClick={this.handleSubmit} />
  </form>
  ;



  return ( 
    <>
      <Navbar />
      <section className={styles.homeParent}>
        <h1>Welcome to Crime Radar.</h1>
        <p> We are here to help you keep up to date with street crime in your area.</p>
        <p>You tell us the month and postcode in which you wish to search, and we will do all the investigating for you within a mile radius. 
        Let's get started! </p>
        <span className="postcode">Enter your postcode</span>
        <input type="text" name="postcode" onInput = {(event)=>this.setState({inputPostcode: event.target.value})}></input>
        <button onClick={this.grabLatAndLong}>Go</button>
        <div className="longLatForm">
          {renderLong}
          {renderLat}
          {this.state.longitude !== ""  && this.state.latitude !== "" ? form : ""}
        </div>
      {/* <CrimesList /> */}
      </section>
      </>
     );
}

}







 
export default HomePage;