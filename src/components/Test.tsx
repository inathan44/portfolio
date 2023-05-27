import React from 'react';
import './Carousel.css';

const Carousel = ({ items }) => {
  return (
    <div className='carousel flex'>
      {/* <div className='carousel-inner'>
        {items.map((item, index) => (
          <div key={index} className='carousel-item'>
            <img
              src={item.image}
              alt={item.caption}
              className='carousel-image'
            />
            <div className='carousel-caption'>{item.caption}</div>
          </div>
        ))}
      </div> */}
      <div className='carousel-inner bg-purple-200'>
        {items.map((item, index) => (
          <div key={index} className='carousel-item'>
            <img
              src={item.image}
              alt={item.caption}
              className='carousel-image'
            />
            <div className='carousel-caption'>{item.caption}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
