import React from 'react';
// import { motion } from 'framer-motion';

// import { AppWrap } from '../../wrapper';
// import { images } from '../../constants';
import './About.scss';

const About = (props) => (
  <div className='about'>
  <div className='aboutinner'>
   <div className='aboutBox boxabout1'>
     {/* <img src={`./images/about0${props.img1}.png`} alt='card1' width='400px' height='400px'/> */}
     <img className="imgincard" src='https://images.pexels.com/photos/872489/pexels-photo-872489.jpeg?auto=compress&cs=tinysrgb&w=600' alt='card1'/>
     <p className='para'> OUR SERVICE</p>
     <h2 className='head'>{props.head1}</h2>
   </div>
   <div className='aboutBox boxabout2'>
   {/* <img src={`./images/about0${props.img1}.png`} alt='card1' width='400px' height='400px'/> */}
   <img className="imgincard" src='https://images.pexels.com/photos/17224851/pexels-photo-17224851/free-photo-of-white-flying-drone.jpeg?auto=compress&cs=tinysrgb&w=600' alt='card1'/>
      <p className='para'> OUR SERVICE</p>
     <h2 className='head'>{props.head2}</h2>
  </div>
 </div>
</div>
);

export default About;