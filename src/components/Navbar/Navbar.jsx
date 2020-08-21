import React, { Component } from 'react';
import styles from "./Navbar.module.scss";
import { Link } from "@reach/router";

class Contact extends Component {

  render() { 
    return ( 
      <div className={styles.navParent}>
        <img src= '../../../assets/images/radar.png' alt="logo of radar" />
        <Link to="/">
          <p>Homepage</p>
        </Link>
        <Link to="contact">
          <p>Contact</p>
        </Link>
      </div>
     );
  }
}
 
export default Contact;