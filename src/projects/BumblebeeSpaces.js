import React, { Component } from 'react';
import { Route, withRouter } from "react-router-dom";

import SectionHeader from '../components/SectionHeader';
import HeroBanner from '../components/HeroShot';
import NavElem from '../components/projectNav';
import BackButton from '../components/BackButton';
import Home from "../contents/Home";

import Hero from '../img/bumblebee_img/bbheromock.png';
import Focusgroup from '../img/bumblebee_img/focusgroup.png';
import Frame from '../img/bumblebee_img/Frame.png';
import Ideation from '../img/bumblebee_img/ideation.png';
import Flows from '../img/bumblebee_img/cleaned up.png';
import Midfi1 from '../img/bumblebee_img/midfi.png';
import ColorExplo from '../img/bumblebee_img/colorexploration.png';
import Testing from '../img/bumblebee_img/usertesting.png';
import Change1 from '../img/bumblebee_img/smart_copy.png';
import Change2 from '../img/bumblebee_img/lifestyle_img.png';
import Change3 from '../img/bumblebee_img/illustration.png';
import LandingGif from '../img/bumblebee_img/landingpage_gif.gif';
import ResidentsGif from '../img/bumblebee_img/residentsgif.gif';
import DevelopersGif from '../img/bumblebee_img/developersgif.gif';
import ProductGif from '../img/bumblebee_img/productgif.gif';
import AboutGif from '../img/bumblebee_img/aboutusgif.gif';
import Styleguide from '../img/bumblebee_img/styleguide.png';
import Team from '../img/bumblebee_img/team.png';

import "../css/projects.css";

class Bumblebee extends Component {

  constructor() {
    super();

    this.final = React.createRef();
  }

  scrollToEnd =()=> {
    this.final.current.scrollIntoView({behavior: 'smooth'})
  };

  componentDidMount() {
        window.scrollTo(0, 0);
    }

  render() {
    const bgstyle1 = {height: '300px'};

    const bgstyle2 = {height: '1450px'};

    const bgstyle3 = {height: '450px'};

    return (
      <div className="projectContainer">
        <div className="backbuttoncontainer">
          <BackButton/>
          <Route exact path="/" component={Home}/>
        </div>
      	<HeroBanner title="Bumblebee Spaces" subtext="Improving the customer viewing experience / Website design" img=<img src={Hero} className="heroImage"></img>/>
      	<div className="buttondiv"><button className="view" onClick={this.scrollToEnd}>View Prototype</button></div>
        <div className="sideNav"></div>
        <div className="caseContent">
      		<div className="section summary">
      			<p>In my spring 2019 semester at UC Berkeley, 
      			I had the opportunity to redesign a website 
      			for Bumblebee Spaces as a design consultant under Berkeley Innovation.</p>
      			<p>I worked with Serena Chan, Erika Jin, Justin Wong, and our mentor Tiger Fu 
      			to design a website that conveyed the story of the company’s product and the 
      			interactive product experience.</p>

            <div className="video"><iframe width="560" height="315" src="https://www.youtube.com/embed/DBa69WSug8c" 
            frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
      		</div>
      		<div className="section 1">
      			<SectionHeader title="Overview"/>
            <p>Bumblebee Spaces (now Bumblebee) is an SF-based start-up that uses 
            innovative technology to turn living spaces into multi-functional smart homes.  
            Their modular units make it easy to reconfigure a room and store belongings according 
            to your varying needs across different times of day.</p>
            <div className="highlight">We were asked to design a website that would represent their brand 
            and digitally replicate the product showroom experience.</div>
      		</div>
      		<div className="section 2">
      			<SectionHeader title="Research"/>
            <p>We worked with our client to identify our main stakeholders:</p>
            <ul>
              <li><b>Residents</b>, or homeowners or renters currently living in a space.</li>
              <li><b>Developers/landlords</b>, or people who own and manage a property.</li>
            </ul>
            <p>We then built a research plan and proceeded to execute the following.</p>
            <div className="titleandtext">
              <div className="title2">User Interviews</div>
              <p>We interviewed 2 landlords and 3 current beta Bumblebee Spaces users to better 
              understand their perspective on the product and current content provided on the website.</p>
            </div>
            <div className="titleandtext">
              <div className="title2">Focus Group</div>
              <p>We brought in 9 current SF residents in their 20s to view the showroom and give feedback on
               the website in the Bumblebee Spaces office in San Francisco.</p>
                <img className="centeredimg" src={Focusgroup}></img>
            </div>
            <div className="titleandtext">
              <div className="title2">Secondary Research</div>
              <p>We conducted competitor analysis on home technology to understand how they represented their product digitally.</p>
              <img className="centeredimg" src={Frame}></img>
            </div>
            <div className="titleandtext">
              <div className="divcontent">
                <div className="title2">Top Insights</div>
                <div className="highlight">People were less interested in the technology specs and more interested in the story and 
                lifestyle Bumblebee could provide for them.</div>
                <ul className="projlist">
                  <li>Tech-heavy terminology like “AI butler” and “Robot” made people uncomfortable and made the product appear wildly futuristic and inaccessible.</li>
                  <li>Both landlords and tenants wanted to know more about the financial cost of the product -- landlords, in particular, wanted to know the return on investment (ROI).</li>
                </ul>
              </div>
              <div className="background" style={bgstyle1}></div>
            </div>
      		</div>
      		<div className="section 3">
      			<SectionHeader title="Ideation"/>
            <p>We took our main insights from research and did a brainstorm session on the different features and interactions to be included in the website. 
             We then affinity mapped our ideas into 3 sections: website function, content/information, and visuals.</p>
             <img className="centeredimg" src={Ideation}></img>
            <p>We also discussed what pages we would have and what information would be on each page, to ensure that we didn’t have too much 
             repetition or unnecessary overlap between pages.</p>
             <img src={Flows} width="900"></img>
            <p>Ultimately, we felt that it was important to have separate information pages for the residents and developers because of their different interests.</p>
      		</div>
      		<div className="section 4">
      			<SectionHeader title="Iterations"/>
            <p>When it came to designing, we split up the pages to design within our team.  I was in charge of the About Us page and landing page.  
            Below are our mid-fi iterations of our pages and some color explorations.</p>
            <img src={Midfi1} width="900"></img>
            <img src={ColorExplo} className="centeredimg"></img>
            <div className="titleandtext">
              <div className="title2">Testing</div>
              <p>We decided to do some further testing with the old website, particularly around word associations and product descriptions 
              as we had been using the same descriptions from the previous site.  <b>We were also looking to get more input on not just what 
              people thought of the product, but what would make them interested in buying it.</b></p>
              <img src={Testing} className="centeredimg"></img>
              <p>We used UserTesting.com to interview 12 users ranging from ages 25-60 and with incomes of $40k+.  tested some of the word associations 
              we had been using, such as “robot assistant”, “smart home”, and “smart storage”.  From our testing, we found: </p>
              <ul className="projlist">
                <li>People felt more compelled to use <b>Bumblebee Spaces as a storage solution rather than as a minimalist lifestyle.</b></li>
                <li>People were intrigued and interested about the product’s idea and concept, but <b>felt that it was out of their price range.</b></li>
                <li>People did not like describing the product as “AI”. <b>They preferred describing Bumblebee as a “Smart Home”, “Smart Storage”, and “Smart Organizer.”</b></li>
              </ul>
            </div>
            <div className="titleandtext">
              <div className="divcontent">  
                <div className="title2">Major Changes</div>
                <p>After reviewing the results of our user testing, we decided to rethink how we were approaching the design and content of our pages.</p>
                <div className="imageandtext">
                  <img className="image left" width="450" src={Change1}></img>
                  <div className="text">
                    <div className="title2">Rewording our copy</div>
                    <p>We rephrased our copy to use the words “smart” when describing any part of the product.
                    </p></div>
                </div>
                <div className="imageandtext">
                  <img className="image right" width="450" src={Change2}></img>
                  <div className="text">
                  <div className="title2">Rethinking the Landing & Residents page content</div>
                  <p>We decided to change the landing page and residents pages so that they had more imagery and less specific technical information.</p></div>
                </div>
                <div className="imageandtext">
                  <img className="image left" width="450" src={Change3}></img>
                  <div className="text">
                    <div className="title2">Adding illustrations</div>
                    <p>I made some simple line-art illustrations to make the website and product feel more casual and familiar, 
                    rather than an unreachable tech product.</p>
                  </div>
                </div>
                <div className="highlight">We hoped to spend more time highlighting the lifestyle aspect of the product and show that it could be a way 
                of living, not just a home add-on</div>
              </div>
              <div className="background" style={bgstyle2}></div>
            </div>
      		</div>
      		<div className="section final" ref={this.final}>
      			<SectionHeader title="Final Design"/>
            <iframe width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FNe2IQFIAAg1w7bQxaTILSDBb%2FBumblebee-Spaces-Final-Deliverable%3Fnode-id%3D1%253A412%26viewport%3D407%252C340%252C0.04580371081829071%26scaling%3Dcontain&chrome=DOCUMENTATION" allowfullscreen></iframe>
             <div className="buffer">
              <div className="divcontent">
                <div className="imageandtext">
                    <img className="image left" width="550" src={LandingGif}></img>
                    <div className="text">
                      <div className="title2">Landing Page</div>
                      <p>I made some simple line-art illustrations to make the website and product feel more casual and familiar, 
                      rather than an unreachable tech product.</p>
                    </div>
                  </div>
                </div>
                <div className="background" style={bgstyle3}></div>
              </div>
             <div className="imageandtext buffer">
                <img className="image right" width="550" src={ProductGif}></img>
                <div className="text">
                  <div className="title2">Product Page</div>
                  <p>The product page focuses on all of the specific design elements 
                  and technological aspects of the product itself.</p>
                </div>
              </div>
              <div className="buffer">
                <div className="divcontent">
                  <div className="imageandtext">
                      <img className="image left" width="550" src={AboutGif}></img>
                      <div className="text">
                        <div className="title2">About Us</div>
                        <p>The About Us page shows the main mission and goals of the company as 
                        well as the people behind it.  It also houses the career section.</p>
                      </div>
                    </div>
                  </div>
                  <div className="background" style={bgstyle3}></div>
              </div>
              <div className="imageandtext buffer">
                <img className="image right" width="550" src={ResidentsGif}></img>
                <div className="text">
                  <div className="title2">Residents</div>
                  <p>The residents page goes into the specifics of the lifestyle afforded by bumblebee.  
                  It also features the savings calculator, that shows how you can save overall as a result of installing Bumblebee.</p>
                </div>
              </div>
              <div className="buffer">
                <div className="divcontent">
                  <div className="imageandtext">
                      <img className="image left" width="550" src={DevelopersGif}></img>
                      <div className="text">
                        <div className="title2">Developers</div>
                        <p>The developer’s page is more technical than the residents, 
                        and instead focuses on the ROI and general process of installing, as well as the product specifications.</p>
                      </div>
                    </div>
                  </div>
                  <div className="background" style={bgstyle3}></div>
              </div>
              <div className="title2">Style Guide</div>
              <p>We decided to go with a light theme to match the light wood color of the product, and paired it with a muted green. 
               The goal was to make the website feel clean, welcoming, and homey.</p>
               <img width="900" src={Styleguide}></img>
          </div>
          <div className="section 6">
            <SectionHeader title="Reflection"/>
            <p>My main takeaways from this project were:</p>
            <ul className="projlist">
              <li><b>Ask tons of questions</b>, even when you think you understand everything.  While we were working on the project the goals and 
              design of the product changed, so we were constantly asking questions and trying to make sure we were on top of the updates. </li>
              <li><b>Designing for consumer-facing products and websites takes in more than just the interests of the user.</b>  We also received a lot 
              of feedback from the company founders about the website and used our research to inform the direction we would take to support 
              their business goals and interests. </li>
            </ul>
            <img className="centeredimg" src={Team}></img>
            <p>Overall, our team was well-balanced and able to utilize the strengths of each member well during the project.  
            It was my first time working in a fast-paced tech start-up environment, so it was interesting to learn about the processes that happen to create and release a new product.  
            If we had more time, I would have loved to spend more time prototyping the website interactions to further replicate the experience of a showroom.  </p>
          </div>
      	</div>
        <div className="backbuttoncontainer bottom">
          <BackButton/>
          <Route exact path="/" component={Home}/>
        </div>
      </div>
    );
  }
}

export default Bumblebee;