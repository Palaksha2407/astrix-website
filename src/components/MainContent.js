import React from 'react';
import './MainContent.css';
import Carousel from './Carousel';
import { CarouselImages } from './Data';

const MainContent = () => {
  return (
    <main className="main-content">
      <div className="event-image">
      <Carousel images={CarouselImages}/>
      </div>
      <div className="actions">
        
        <button>Collections</button>
      </div>
    </main>
  );
};

export default MainContent;
