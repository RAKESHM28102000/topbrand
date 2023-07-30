import React from 'react';
import './Work.scss';
// import { FaLongArrowAltRight} from 'react-icons/fa';

const Work = () => (
 <div id='work'>
     <div className='workinner'>
   
     <div className='workin'>
       <p className='para'> OUR SERVICE</p>
       <h1 className='para'>Influence Marketing <br/> Strategy</h1>
       <p className='para'>It was popularised in the 1960s survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
       <button className='buttoninwork' >View </button>
      </div>
      <div className='imageinwork'></div>
      <div className='imginwork1'></div>
     <div className='workin'> 
       <p className='para'> OUR SERVICE</p>
       <h1 className='para'>AI Powered</h1>
       <p className='para'>It was popularised in the 1960s survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
       <button className='buttoninwork' >View </button>
       {/* <FaLongArrowAltRight/> */}
     </div>
     </div>
 </div>

);

export default Work;