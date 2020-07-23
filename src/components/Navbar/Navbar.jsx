import React, { Component } from 'react';
import styles from "./Navbar.module.scss";
import { Link } from "@reach/router";

class Contact extends Component {

  render() { 
    return ( 
      <div className={styles.navParent}>
        <Link to="/">
          <div>Homepage</div>
        </Link>
        <Link to="contact">
          <div>Contact</div>
        </Link>
      </div>
     );
  }
}
 
export default Contact;