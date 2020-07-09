import React, { Component } from "react";

//decoration images
import RedCircle from '../img/redcircle.svg';
import Squiggles from '../img/squiggles.svg';
import Underline from '../img/single_squiggle.png';
import YellowOval1 from '../img/yellowoval.svg';
import RedOval from '../img/redoval.svg';
import YellowOval2 from '../img/yellowoval2.svg';

//project images
import Bampfa from '../img/bampfa.svg';
import Ubiquity from '../img/ubiquitypress.png';
import Bumblebee from '../img/bumblebee.svg';
import Bi from '../img/bimarketing.svg';
import Ethical from '../img/ethical.svg';
import Dialpad from '../img/dialpad.svg';
import CritMaking from '../img/critmaking.svg';



//plug in that will make images draggable
import Draggable from 'react-draggable'; // The default

// import ButtonItem from '../components/Buttons';
import ProjectItem from '../components/Project';
import Footer from '../components/Footer';
import "../css/home.css";

import { Link } from "react-router-dom";

 
class Home extends React.Component {

  constructor() {
    super();

    this.section1 = React.createRef();
    this.section2 = React.createRef();
    this.section3 = React.createRef();

    // this.state = {
    //   displayUpButton: true,
    //   scrollPosition: 0
    // }
  }

  scrollTo1 =()=> {
    this.section1.current.scrollIntoView({behavior: 'smooth'})
  };

  scrollTo2 =()=> {
    this.section2.current.scrollIntoView({behavior: 'smooth'})
  };

  scrollTo3 =()=> {
    this.section3.current.scrollIntoView({behavior: 'smooth'})
  };

  componentDidMount() {
        window.scrollTo(0, 0);
    }

  // handleScroll = (event) => {
  //   this.setState({scrollPosition:window.pageYOffset}, this.checkScroll)
  // }

  // checkScroll = () => {
  // console.log("Scroll position:", window.pageYOffset)
  //     if (this.state.scrollPosition > 30) {
  //       this.setState({displayUpButton:false})
  //     } else {
  //       this.setState({displayUpButton:true})
  //     }
  // }


     // {this.state.displayUpButton ?
     //  <button className="upButton">Back to Top</button>
     //  : null}

  //for draggable
  onStart = () => {
    this.setState({activeDrags: ++this.state.activeDrags});
  };

  //for draggable
  onStop = () => {
    this.setState({activeDrags: --this.state.activeDrags});
  };


  render() {
    return (
      <div className = "home">
        <p id="tagline">Mimi is a designer and tinkerer looking for new ways to play.</p>
        <p className="subheader">I'm visiting Mimi's website because I'm interested in seeing her:</p>

      	<Draggable>
      		<img src={RedCircle} className="redcircle"></img>
      	</Draggable>
      	<Draggable>
        	<img src={Squiggles} className="squiggles"></img>
        </Draggable>
    	
      <ul className="buttons">
        	<li><button className="toSections" onClick={this.scrollTo1}>UI/UX Design</button></li>
        	<li><button className="toSections" onClick={this.scrollTo2}>Graphic Design</button></li>
        	<li><button className="toSections" onClick={this.scrollTo3}>Tinkering</button></li>
    	</ul>
        
        <div className="projects container">
        	 <div className="container uiux" ref={this.section1}>
             <div className="section-title">
                <h2>UI/UX Design</h2>
                <img src={Underline} className="underline"></img>
             </div>
             <div className="row">
                <div className="col">
                  <Link to="/bumblebeespaces" className="proj-link"><ProjectItem image=<img src={Bumblebee} className="projImg"></img> 
                                                                                 desc="Improving the Customer Viewing Experience (Web)" 
                                                                                 name="Bumblebee Spaces  •  Website Design" /></Link>
                </div>
                <div className="col">
                   <ProjectItem image=<img src={Ubiquity} className="projImg"></img> 
                                                                                desc="Tools for Academic Publishing -- Currently Under Construction" 
                                                                                name="Ubiquity Press • UX Design Internship" />
                </div>
              </div>
              <div className="row 2">
                <div className="col">
                   <Link to="/bampfa" className="proj-link"><ProjectItem image=<img src={Bampfa} className="projImg"></img>
                                                                         name="Bampfa AR • UI/Interaction Design" 
                                                                         desc="Creating an Interactive AR Exhibit Experience (Tablet)"/></Link>
                </div>
                <div className="col">
                  <Draggable>
                      <img src={YellowOval1} className="accent yellowoval1"></img>
                  </Draggable>
                  <p className="comment">Learning about and planning digital tools and their interactions.</p>
                </div>
              </div>
          </div>

        	<div className="container graphic" ref={this.section2}>
            <div className="section-title">
              <h2>Graphic Design</h2>
              <img src={Underline} className="underline"></img>
            </div>
             <div className="row">
                <div className="col">
                  <Link to="/dialpad" className="proj-link"><ProjectItem image=<img src={Dialpad} className="projImg"></img> 
                                      name="Dialpad • Brand Design Internship" 
                                      desc="Building Dialpad's Illustration Style"/></Link>
                </div>
                <div className="col">
                   <Link to="/ethicalapparel" className="proj-link"><ProjectItem image=<img src={Ethical} className="projImg"></img> 
                                                                                 name="EthiCAL Apparel • Apparel Design" 
                                                                                 desc= "Leading + Designing for a Student-Run Apparel Business"/></Link>
                </div>
              </div>
              <div className="row 2">
                <div className="col">
                  <Draggable>
                    <img src={RedOval} className="accent redoval"></img>
                  </Draggable>
                  <p className="comment">Playing with graphic design across different forms.</p>
                </div>
                <div className="col">
                     <Link to="/berkeleyinnovation" className="proj-link"><ProjectItem image=<img src={Bi} className="projImg"></img>
                                                                                      name="Berkeley Innovation • Marketing & Graphic Design" 
                                                                                      desc="Creating the Visual and Online Presence for a Student-Run Design Org"/></Link>
                </div>
              </div>
          </div>
        	<div className="container tinker" ref={this.section3}>
            <div className="section-title">
              <h2>Tinkering</h2>
              <img src={Underline} className="underline"></img>
            </div>
              <div className="row">
                <div className="col">
                  <Link to="/criticalmaking" className="proj-link"><ProjectItem image=<img src={CritMaking} className="projImg"></img>
                                                                                name="Critical Making • Graduate Class in New Media" 
                                                                                desc="Exploring Design Through Making and New Media"/></Link>
                </div>
                <div className="col">
                  <Draggable>
                    <img src={YellowOval2} className="accent yellowoval2"></img>
                  </Draggable>
                  <p className="comment">Exploring different ways to design, learn, and educate.</p>
                </div>
              </div>
          </div>
        </div>
        <Footer email="mimishalf@mac.com" />
      </div>
    );
  }
}
 
export default Home;