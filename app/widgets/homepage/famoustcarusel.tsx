import React, { useState } from 'react';
import { famoustcourses } from '~/data/famoustcourses';
import { RightCaruselArrow, LeftCaruselArrow } from 'assets/icons';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export function FamoustCarousel(){
    const courseCard = {
        height: '390px',
        width: '330px',
        backgroundColor: '#F6F6F6',
        margin: '10px',
        fontFamily: 'Verdana',
    };

    const customDot = {
        width: '10px',
        height: '10px',
        backgroundColor: '#007bff',
        borderRadius: '50%',
        margin: '0 5px',
        cursor: 'pointer',
        transition: 'all 0.3s ease'
    };

    const caru = {
        width: '1700px'
    }

    const [activeDot, setActiveDot] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        customPaging: (i: number) => <div style={customDot} key={i} />,
        beforeChange: (current: number, next: number) => setActiveDot(next),
    };      

      const elements = Array.from(famoustcourses, (item, index) => (
        <div key={index}>
          <div className="carousel-item-content" style={courseCard}>
            <h3>{item.Name}</h3>
            <p>Description for element {index + 1}</p>
          </div>
        </div>
      ));
    
      return (
        <div style={caru} className='gap-[96px] mx-auto py-9'>
          <Slider {...settings}>{elements}</Slider>
        </div>
      );
}