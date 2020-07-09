import React, { Component } from 'react';
import {Link, Router, Route} from 'react-router-dom';

class Project extends Component {
  render() {
    return (
    	<div className = "projectContainer">
    		<div className="square">
	    		<div className="overlay">{this.props.desc}</div>
	    		{this.props.image}
    		</div>
    		<p>{this.props.name}</p>
    	</div>
    );
  }
}

export default Project;