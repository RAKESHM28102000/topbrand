import React from 'react';
import './NewsScroll.scss'; 

const NewsScroll= ({ newsData }) => {
  return (
    <div className='news'>
    <div className="ticker-container">
      <ul className="ticker-list">
        {newsData.map((item, index) => (
          <li key={index} className="ticker-item">
            {item}<span style={{color:"red",padding:"0 10px"}}>*</span><span style={{color:"white",padding:"0 10px"}}>-</span>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default NewsScroll;
