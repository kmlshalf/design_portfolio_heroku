import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
    	<div className="center">
    	<div className="footerWrapper">
    		<h1>Hey You, Let's Chat!</h1>
    		<ul className="footerContent">
    			<li><a href={"mailto:"+this.props.email}>katharine.shalf@berkeley.edu</a></li>
    			<li>Coded with love and pain in ReactJS</li>
    		</ul>
    	</div>
    	</div>
    );
  }
}

export default Footer;