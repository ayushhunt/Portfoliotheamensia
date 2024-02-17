// ImageCarousel.jsx

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:3000,
    responsive: [
        {
          breakpoint: 1024, // Desktop
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 600, // Tablet
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480, // Mobile
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
  };

  return (
    <div style={{width:'95%',height:'30%',
                
                borderRadius:'4px',
                backgroundColor:'white',
    }}>
      <Slider {...settings}>
        <div>
          <img src="image1.jpg" alt="Image 1" style={{ width: '100%', height: 'auto' }}/>
        </div>
        <div>
          <img src="image7.jpg" alt="Image 2" style={{ width: '100%', height: 'auto' }}/>
        </div>
        <div>
          <img src="image8.jpg" alt="Image 3" style={{ width: '100%', height: 'auto' }}/>
        </div>
        <div>
          <img src="image9.jpg" alt="Image 4" style={{ width: '100%', height: 'auto' }}/>
        </div>
        <div>
          <img src="image10.jpg" alt="Image 5" style={{ width: '100%', height: 'auto' }}/>
        </div>
      </Slider>
      </div>
  );
};

export default ImageSlider;
