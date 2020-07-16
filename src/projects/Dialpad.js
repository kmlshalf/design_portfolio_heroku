import React, { Component } from 'react';
import { Route, withRouter } from "react-router-dom";

import SectionHeader from '../components/SectionHeader';
import HeroBanner from '../components/HeroShot';
import NavElem from '../components/projectNav';
import BackButton from '../components/BackButton';
import Home from "../contents/Home";

import PropTypes from 'prop-types';
import { render } from 'react-dom';
import Gallery from 'react-grid-gallery';

import v101 from "../img/dialpad/dp_illustrations/v1/v1_01.png";
import v102 from "../img/dialpad/dp_illustrations/v1/v1_02.png";
import v103 from "../img/dialpad/dp_illustrations/v1/v1_03.png";
import v104 from "../img/dialpad/dp_illustrations/v1/v1_04.png";
import v105 from "../img/dialpad/dp_illustrations/v1/v1_05.png";
import v106 from "../img/dialpad/dp_illustrations/v1/v1_06.png";
import v107 from "../img/dialpad/dp_illustrations/v1/v1_07.png";
import v108 from "../img/dialpad/dp_illustrations/v1/v1_08.png";
import v1phone1 from "../img/dialpad/dp_illustrations/v1/v1phone_01.png";
import v1phone2 from "../img/dialpad/dp_illustrations/v1/v1phone_02.png";
import v1phone3 from "../img/dialpad/dp_illustrations/v1/v1phone_03.png";
import v201 from "../img/dialpad/dp_illustrations/v2/v2_01.png";
import v202 from "../img/dialpad/dp_illustrations/v2/v2_02.png";
import v203 from "../img/dialpad/dp_illustrations/v2/v2_03.png";
import v204 from "../img/dialpad/dp_illustrations/v2/v2_04.png";
import final01 from "../img/dialpad/dp_illustrations/v3/final_01.png";
import final02 from "../img/dialpad/dp_illustrations/v3/final_02.png";
import final03 from "../img/dialpad/dp_illustrations/v3/final_03.png";
import final04 from "../img/dialpad/dp_illustrations/v3/final_04.png";
import final05 from "../img/dialpad/dp_illustrations/v3/final_05.png";
import object01 from "../img/dialpad/dp_illustrations/objects/object01.png";
import object02 from "../img/dialpad/dp_illustrations/objects/object02.png";
import object03 from "../img/dialpad/dp_illustrations/objects/object03.png";
import object04 from "../img/dialpad/dp_illustrations/objects/object04.png";
import social01 from "../img/dialpad/social_media/dpsell_g2banner.png";
import social02 from "../img/dialpad/social_media/dptalk_g2banner.png";
import social03 from "../img/dialpad/social_media/fb+linkedinpride-01.png";
import social04 from "../img/dialpad/social_media/gatedg2landing_contentimg_bookmock.png";
import datasheet1 from "../img/dialpad/datasheets/dptalk01.jpg";
import datasheet2 from "../img/dialpad/datasheets/dptalk02.png";
import datasheet3 from "../img/dialpad/datasheets/ui_callout.png";
import misc01 from "../img/dialpad/misc/monalisa.png";
import misc02 from "../img/dialpad/misc/On24icons.png";
import misc03 from "../img/dialpad/misc/saleshacker_webinar.png";

import "../css/projects.css";

class Dialpad extends React.Component {
  componentDidMount() {
        window.scrollTo(0, 0);
    }

  constructor(props){
        super(props);

        this.state = {
            gallery1: this.props.gallery1,
            gallery2: this.props.gallery2,
            gallery3: this.props.gallery3,
            objects: this.props.objects,
            social: this.props.social,
            datasheets: this.props.datasheets
        };

    } 

  render() {
    return (
      <div className="projectContainer">
        <div className="backbuttoncontainer">
          <BackButton/>
          <Route exact path="/" component={Home}/>
         </div>
         <HeroBanner title="Dialpad" subtext="Building Dialpad's Illustration Style/ Brand Design Internship"/>
         <div className="caseContent">
            <div className="section summary">
              <p>During the summer of 2019, I worked as a brand design intern at Dialpad, a business VoIP start-up in SF.
               I worked on projects ranging from illustration to formatting to UI, and got to strengthen my visual design 
               skills while working in a company environment.
               </p>
              </div>
            <div className="section 1">
              <SectionHeader title="Creating a New Illustration Style"/>
              <p>While I was interning at Dialpad, they were preparing to release a complete rebrand of their company.  
              My main project, along with another intern, was developing an illustration style to go along with the new brand.</p>
              <div className="highlight">The goal was to create a simple, geometric illustration style that could be easily added on 
              to as the new brand developed.</div>
              <p>Because Dialpad’s main product was a cloud phone system, we focused on first designing what the people and phones would look like.</p>
              <div className="title2">Iterations</div>
              <p>We started with trying out a wide variety of illustrations, using Dialpad’s new brand colors.  
              Below are some of my explorations.</p>
              
              <div className="gallery buffer" style={{
                    display: "block",
                    minHeight: "1px",
                    width: "100%",
                    overflow: "auto"}}>
               <Gallery
                images={this.state.gallery1}
                enableLightbox={true}
                enableImageSelection={false}
                margin={0}
                rowHeight={200}/>
             </div>

              <p>After reviewing the first iteration, it was decided that we wanted to go with styles that had 
               few complex shapes, but still reflected the business aspect of Dialpad.</p>
              <p>The team liked my simple geometric person that could easily be broken down into icons, but felt that it looked more childish than business-like.  
                I worked on adding more shape and dimension to those characters in my second iteration.</p>

              <div className="gallery buffer" style={{
                    display: "block",
                    minHeight: "1px",
                    width: "100%",
                    overflow: "auto"}}>
               <Gallery
                images={this.state.gallery2}
                enableLightbox={true}
                enableImageSelection={false}
                margin={0}
                rowHeight={400}/>
             </div>

              <div className="title2">Final Iteration</div>
              <p>The final iteration featured simple characters that were simple and plain but could easily be spruced up with 
              the addition of small details.</p>

              <img className="centeredimg" src={final01}></img>

              <p> I worked on making the characters seem more life-like and interacting with their phones, and explored the 
              different representations of the style.</p>

              <div className="gallery buffer" style={{
                    display: "block",
                    minHeight: "1px",
                    width: "100%",
                    overflow: "auto"}}>
               <Gallery
                images={this.state.gallery3}
                enableLightbox={true}
                enableImageSelection={false}
                margin={0}
                rowHeight={330}/>
             </div>

              <p>I also created some additional illustrations of objects to go with the people.</p>

              <div className="gallery buffer" style={{
                    display: "block",
                    minHeight: "1px",
                    width: "100%",
                    overflow: "auto"}}>
               <Gallery
                images={this.state.objects}
                enableLightbox={true}
                enableImageSelection={false}
                margin={0}
                rowHeight={400}/>
             </div>

              <p>After I left the internship, the other intern and the rest of the team continued to develop the style and create different versions to use on social media.  
              It is now being used on all of Dialpad’s social media platforms including LinkedIn, Instagram, and Facebook.</p>
            </div>
            <div className="section 2">
              <SectionHeader title="Additional Work"/>
              <p>In addition to creating a new illustration style, I also...</p>
              <div className="title2">Designed social media banners, cards, and assets using Sketch and Illustrator</div>

              <div className="gallery buffer" style={{
                    display: "block",
                    minHeight: "1px",
                    width: "100%",
                    overflow: "auto"}}>
               <Gallery
                images={this.state.social}
                enableLightbox={true}
                enableImageSelection={false}
                margin={0}
                rowHeight={220}/>
             </div>

              <div className="title2">Formatted and created illustrations for internal and customer-facing data sheets using InDesign</div>

               <div className="gallery buffer" style={{
                    display: "block",
                    minHeight: "1px",
                    width: "100%",
                    overflow: "auto"}}>
               <Gallery
                images={this.state.datasheets}
                enableLightbox={true}
                enableImageSelection={false}
                margin={0}
                rowHeight={500}/>
             </div>

              <div className="title2">And completed some small, fun tasks where I got to play a little bit more.</div>

                <div className="col-container buffer">
                <div className="column two">
                  <img src={misc01}></img>
                </div>
                <div className="column three">
                  <img src={misc02}></img>
                  <img src={misc03}></img>
                </div>
              </div>

              <p>Overall, I enjoyed my time as an intern and learned a lot about best visual design practices and creating production-ready visual content.  
              Thank you Dialpad for the experience!  </p>
            </div>
         </div>
       </div>
    );
  }
}
Dialpad.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            thumbnail: PropTypes.string.isRequired,
            srcset: PropTypes.array,
            caption: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.element
            ]),
            thumbnailWidth: PropTypes.number.isRequired,
            thumbnailHeight: PropTypes.number.isRequired
        })
    ).isRequired
};

Dialpad.defaultProps = {
    gallery1: [
        {
            src: v101,
            thumbnail: v101
        },
        {
            src: v102,
            thumbnail: v102
        },
        {
            src: v103,
            thumbnail: v103
        },
        {
            src: v104,
            thumbnail: v104
        },
        {
            src: v105,
            thumbnail: v105
        },
        {
            src: v106,
            thumbnail: v106
        },
        {
            src: v107,
            thumbnail: v107
        },
        {
            src: v108,
            thumbnail: v108
        },
        {
            src: v1phone1,
            thumbnail: v1phone1
        },
        {
            src: v1phone2,
            thumbnail: v1phone2
        },
        {
            src: v1phone3,
            thumbnail: v1phone3
        },  
    ],
    gallery2: [
        {
            src: v201,
            thumbnail: v201
        },
        {
            src: v202,
            thumbnail: v202
        },
        {
            src: v203,
            thumbnail: v203
        },
        {
            src: v204,
            thumbnail: v204
        }   
    ],
    gallery3: [
        {
            src: final05,
            thumbnail: final05
        },   
        {
            src: final02,
            thumbnail: final02
        },
        {
            src: final03,
            thumbnail: final03
        },
        {
            src: final04,
            thumbnail: final04
        }
    ],
    objects: [
        {
            src: object01,
            thumbnail: object01
        },   
        {
            src: object02,
            thumbnail: object02
        },
        {
            src: object03,
            thumbnail: object03
        },
        {
            src: object04,
            thumbnail: object04
        }
    ],
    social: [
        {
            src: social01,
            thumbnail: social01
        },   
        {
            src: social02,
            thumbnail: social02
        },
        {
            src: social03,
            thumbnail: social03
        },
        {
            src: social04,
            thumbnail: social04
        }
    ],
    datasheets: [
        {
            src: datasheet1,
            thumbnail: datasheet1
        },   
        {
            src: datasheet2,
            thumbnail: datasheet2
        },
        {
            src: datasheet3,
            thumbnail: datasheet3
        }
    ]
};

export default Dialpad;