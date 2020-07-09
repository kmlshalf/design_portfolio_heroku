import React, { Component } from 'react';

class SectionHeader extends Component {
  render() {
    return (
    	<div className = "headerContainer">
    		<div className="header">
	    		{this.props.title}
          <div className="hline"></div>
    		</div>
    	</div>
    );
  }
}

export default SectionHeader;