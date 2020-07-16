import React, { Component } from "react";

import PropTypes from 'prop-types';
import { render } from 'react-dom';
import Gallery from 'react-grid-gallery';

// import hug1 from '../img/anotherhug.png';
// import cat from '../img/cat.png';
// import chair from '../img/chair.png';
// import devan from '../img/Devan.png';
// import dogview from '../img/dogview.png';
// import elise from '../img/Elise.png';
// import face from '../img/face.png';
// import family from '../img/Family.png';
// import florist from '../img/Florist.png';
// import fruit from '../img/Fruit.png';
// import hometown from '../img/Hometown.png';
// import indianrock from '../img/Indian_Rock.png';
// import jolana from '../img/jolanapresent.jpg';
// import kiki1 from '../img/Kiki 1.png';
// import kiki from '../img/Kiki.png';
// import kiss from '../img/kiss.png';
// import lai from '../img/Lai.png';
// import matthewfuture from "../img/Matthew's_Future.png";
// import hug from '../img/hug.png';
// import meetme from '../img/Meet_The_Designer.png';
// import mess from '../img/Mess.png';
// import mom from '../img/Mom.png';
// import mind from '../img/My_Mind_During_Work_.png';
// import nick from '../img/Nick_Present.png';
// import princess from '../img/Princess.png';
// import ronald from '../img/ronaldmcdonald.png';
// import sailormoon from '../img/sailormoon.png';
// import serena from '../img/Serena_Bday.png';
// import sleep from '../img/Sleep.png';
// import sleeping from '../img/sleeping.png';

class Doodles extends Component {
	 constructor(props){
        super(props);

        this.state = {
            images: this.props.images
        };

    } 
	render() {
	    return ( 
	    	 
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