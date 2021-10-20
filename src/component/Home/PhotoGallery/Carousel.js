import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

export default () => (
  <Carousel autoPlay>
    <div>
      <img
        alt=''
        src='https://wp02-media.cdn.ihealthspot.com/wp-content/uploads/sites/260/2018/05/03020437/Before-After-03.jpg'
      />
      <p className='legend'>Mr. Colnewel Robert </p>
    </div>
    <div>
      <img
        alt=''
        src='https://wp02-media.cdn.ihealthspot.com/wp-content/uploads/sites/260/2018/05/03020436/Before-After-04.jpg'
      />
      <p className='legend'>Mr. Smuel Spain </p>
    </div>
    <div>
      <img
        alt=''
        src='https://wp02-media.cdn.ihealthspot.com/wp-content/uploads/sites/260/2018/05/03020438/Before-After-01.jpg'
      />
      <p className='legend'>Mr. Albert Hasid</p>
    </div>
    <div>
      <img
        alt=''
        src='https://wp02-media.cdn.ihealthspot.com/wp-content/uploads/sites/260/2018/05/03020437/Before-After-02.jpg'
      />
      <p className='legend'>Mr. Hubol Tolki</p>
    </div>
  </Carousel>
);
