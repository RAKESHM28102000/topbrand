import React from 'react';
import './Footer.scss';
import Footerquest from './Footerquest';
import { FaInstagram,FaFacebook,FaLinkedin} from 'react-icons/fa';

const Footer = () => {
  const qaList = [
    {
      question: 'Get In Touch',
      answer:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. '
    },
   
  ];
  return <>
    <div id='contact' className="footer">
     <div className='footerinner'>   
        <div className="contentInfooter">
             <h2 className="texth">Top Brands Media</h2>
            <h3 className="text">Chennai</h3>
            <h3 className="text">Los Angeles</h3>
            <div className='footericons'><FaInstagram/><FaFacebook/><FaLinkedin/></div>       
        </div>
        <div className="contentIn"> {qaList.map((qa, index) => (
        <Footerquest key={index} question={qa.question} answer={qa.answer} />
         ))}</div>

  </div>
 </div>  
  </>
 
}
export default Footer;
