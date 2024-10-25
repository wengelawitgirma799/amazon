import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { img } from './img/data';  
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function CarouselEffect() {
  return (
    <div>
      <Carousel
        autoplay={true}
        infiniteLoop={true}
        showIndicators={true}
        showThumbs={true}
      >
       {img.map(imageItemLink => {
					return <img key={imageItemLink} src={imageItemLink} />;
				})}
      </Carousel>
    </div>
  );
}

export default CarouselEffect;
