import React from 'react';
// import { motion } from 'framer-motion';

// import { AppWrap } from '../../wrapper';
// import { images } from '../../constants';
import './Header.scss';

const Header = () => (
  <div id='home' className="app__header">
        <div className="app__header-badge app__flex">
           <h1 className="head-text head1">The World's</h1>
           <h1 className="head-text head2">Best</h1>
           <h1 className="head-text head3">Brand Builders</h1>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text">Only AI powered Brand</p>
          <p className="p-text">Builders ,Social Media And</p>
          <p className="p-text">Digital Marketers</p>
        </div>

        <div className="bgimage">
        </div>
      </div>    

);

export default Header;