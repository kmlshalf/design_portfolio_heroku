import React, { Component } from "react";
import "../css/about.css";

import Identity from "../img/identity.png";
import Instagram from "../img/instagram.png";
import LinkedIn from "../img/linkedin.png";
import Mail from "../img/mailicon.png";

class About extends Component {
  
  render() {
    return (
      <div className="about-container">
      	<div className="about-topsection">
      		<img src={Identity} className="prof_img"></img>
        	<div className="right-content">
        		<h3>Nice to meet you!  Let's get to know each other a little better.</h3>
        		<p>I’ll go first.  I am a designer and recent UC Berkeley grad currently located in my hometown Oakland, California.  
        		I believe in the power of design to impact, educate, and connect, and am working towards facilitating conversations and 
            growth through my own work.</p>
            <p>I am currently a K-12 Education Programs intern at the <a className="general_links" href="https://designmuseumfoundation.org/" target="_blank">Design Museum Everywhere</a>, where I'm 
            playing with virtual design and creative education!</p>
            <p><i>Interested in learning more?  Let's chat!</i></p>
        		<div className="socials">
              <a className="mail" href={"mailto:"+"mimishalf@mac.com"}><img src={Mail} className="social mail"></img></a>
        			<a href="https://www.instagram.com/pamimus/" target="_blank"><img src={Instagram} className="social instagram"></img></a>
        			<a href="https://www.linkedin.com/in/mimi-shalf-748b66132/" target="_blank"><img src={LinkedIn} className="social linkedin"></img></a>
        		</div>
        	</div>
      	</div>
      </div>
    );
  }
}
 
export default About;