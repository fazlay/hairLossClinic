import React from 'react';
import Services from '../Services/Services';
import Banner from './Banner/Banner';
import Testimonial from './Testimonial/Testimonial';
import Slider from './PhotoGallery/PhotoGallery';

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <div className='content-center xl:px-20 sm:px-3 sm:mx-3 xl:mx-20 sm:overflow-hidden pb-5'>
        <Services></Services>
      </div>
      <h1 className='text-center text-3xl font-bold pt-8'> Our Patient's Thought</h1>
      <Testimonial></Testimonial>
      <h1 className='text-center text-3xl font-bold py-5'> Image Gallery</h1>
      <div className='sm:container py-5'>
        <Slider></Slider>
      </div>
    </>
  );
};

export default Home;
