import React, { Component } from "react";

import PropTypes from 'prop-types';
import { render } from 'react-dom';
import Gallery from 'react-grid-gallery';

import hug1 from '../img/illustrations/anotherhug.png';
import cat from '../img/illustrations/cat.png';
import chair from '../img/illustrations/chair.png';
import devan from '../img/illustrations/Devan.png';
import dogview from '../img/illustrations/dogview.png';
import elise from '../img/illustrations/Elise.png';
import face from '../img/illustrations/face.png';
import family from '../img/illustrations/Family.png';
import florist from '../img/illustrations/Florist.png';
import fruit from '../img/illustrations/Fruit.png';
import hometown from '../img/illustrations/Hometown.png';
import indianrock from '../img/illustrations/Indian_Rock.png';
import jolana from '../img/illustrations/jolanapresent.jpg';
import kiki1 from '../img/illustrations/Kiki 1.png';
import kiki from '../img/illustrations/Kiki.png';
import kiss from '../img/illustrations/kiss.png';
import lai from '../img/illustrations/Lai.png';
import matthewfuture from "../img/illustrations/Matthew's_Future.png";
import hug from '../img/illustrations/hug.png';
import meetme from '../img/illustrations/Meet_The_Designer.png';
import mess from '../img/illustrations/Mess.png';
import mom from '../img/illustrations/Mom.png';
import mind from '../img/illustrations/My_Mind_During_Work_.png';
import nick from '../img/illustrations/Nick_Present.png';
import princess from '../img/illustrations/Princess.png';
import ronald from '../img/illustrations/ronaldmcdonald.png';
import sailormoon from '../img/illustrations/sailormoon.png';
import serena from '../img/illustrations/Serena_Bday.png';
import sleep from '../img/illustrations/Sleep.png';
import sleeping from '../img/illustrations/sleeping.png';

class Doodles extends Component {
	 constructor(props){
        super(props);

        this.state = {
            images: this.props.images
        };

    } 
	render() {
	    return ( 
	    	 <div className="doodlegallery" style={{
                    display: "block",
                    minHeight: "1px",
                    width: "100%",
                    overflow: "auto"}}>
	             
             </div>
	    );
  	}
}

// Doodles.propTypes = {
//     images: PropTypes.arrayOf(
//         PropTypes.shape({
//             src: PropTypes.string.isRequired,
//             thumbnail: PropTypes.string.isRequired,
//             srcset: PropTypes.array,
//             caption: PropTypes.oneOfType([
//                 PropTypes.string,
//                 PropTypes.element
//             ]),
//             thumbnailWidth: PropTypes.number.isRequired,
//             thumbnailHeight: PropTypes.number.isRequired
//         })
//     ).isRequired
// };

// Doodles.defaultProps = {
//     images: [
//         {
//             src: hug1,
//             thumbnail: hug1,
//         },
//         {
//             src: cat,
//             thumbnail: cat
//         },
//         {
//             src: chair,
//             thumbnail: chair
//         },
//         {
//             src: devan,
//             thumbnail: devan
//         },
//         {
//             src: dogview,
//             thumbnail: dogview
//         },
//         {
//             src: elise,
//             thumbnail: elise
//         },
//         {
//             src: face,
//             thumbnail: face
//         },
//         {
//             src: florist,
//             thumbnail: florist,
//         },
//         {
//             src: fruit,
//             thumbnail: fruit,
//         },
//         {
//             src: hometown,
//             thumbnail: hometown,
//         },
//         {
//             src: jolana,
//             thumbnail: jolana,
//         },
//         {
//             src: hug,
//             thumbnail: hug,
//         },
//         {
//             src: indianrock,
//             thumbnail: indianrock,
//         },
//         {
//             src: kiki1,
//             thumbnail: kiki1,
//         },
//         {
//             src: kiss,
//             thumbnail: kiss,
//         },
//         {
//             src: lai,
//             thumbnail: lai,
//         },
//         {
//             src: matthewfuture,
//             thumbnail: matthewfuture,
//         },
//         {
//             src: meetme,
//             thumbnail: meetme,
//         },
//         {
//             src: mess,
//             thumbnail: mess,
//         },
//         {
//             src: serena,
//             thumbnail: serena,
//         },
//         {
//             src: family,
//             thumbnail: family,
//         },
//         {
//             src: mom,
//             thumbnail: mom,
//         },
//         {
//             src: mind,
//             thumbnail: mind,
//         },
//         {
//             src: nick,
//             thumbnail: nick,
//         },
//         {
//             src: princess,
//             thumbnail: princess,
//         },
//         {
//             src: sleep,
//             thumbnail: sleep,
//         },
//     ]
// };
 
export default Doodles;