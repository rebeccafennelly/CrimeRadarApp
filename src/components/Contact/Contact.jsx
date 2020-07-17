import React, { Component } from 'react';
import Navbar from '../Navbar';

class Contact extends Component {

  render() { 
    return ( 
      <>
      <Navbar />
     <h1>Contact</h1>
     <p> If you have any enquiries or reports please call 101, if they are not an emergency, or to report a crime online please click here.
       Call 999 if you are reporting a crime that is in progress or if someone is in immediate danger.</p>
      </>
     );
  }
}
 
export default Contact;