import React from 'react';
import './App.scss';
import Navbar from './components/navbar/Navbar';
import Header from './container/Header/Header';
import About from './container/About/About';
import Card from './container/Card/Card';
import Project from './container/Project/Project';
import Work from './container/Work/Work';
import Question from './container/Question/Question';
import OurService from './container/OurService/OurService';
import Footer from './container/Footer/Footer';
import NewsScroll from './container/NewsScroll/NewsScroll';


function App() {
  const obj={name1:"Brand Identity",name2:"Brand Strategy",name3:"Performance Marketing",name4:"Content and Copy Writing"};
  const newsData = [
    'Digital First Worldwide',
    'Digital First Worldwide',
    'Digital First Worldwide',
  ];
  return (
   <><Navbar/>
     <Header/>
     <NewsScroll newsData={newsData} />
     <About  head1={obj.name1} head2={obj.name2} img1={1} img2={2}/>
     <Card  head1={obj.name3} head2={obj.name4} img1={3} img2={4}/>
     <Project/>
     <Work/>
     <Question/>
     <OurService/>
     <Footer/>
   </>
  )
}

export default App;