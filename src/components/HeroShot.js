import React, { Component } from 'react';

class HeroShot extends Component {
  render() {
    return (
    	<div className = "heroContainer">
    		<div className="titleContainer">
          <div className="heroTitle">{this.props.title}</div>
          <div className="heroSubtext">{this.props.subtext}</div>
    		</div>
        {this.props.img}
    	</div>
    );
  }
}

export default HeroShot;