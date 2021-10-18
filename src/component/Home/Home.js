import React, { useEffect, useState } from 'react';
import useService from '../../hook/useService';
import Card from '../Card/Card';
import Services from '../Services/Services';
import Banner from './Banner/Banner';
import Testimonial from './Testimonial/Testimonial';
import Slider from './PhotoGallery/PhotoGallery';

const Home = () => {
  // const { services } = useService();
  // console.log(services);
  return (
    <>
      <Banner></Banner>
      <div className='content-center px-20 mx-20'>
        <Services></Services>
      </div>
      <Testimonial></Testimonial>
      <h1 className="text-center text-3xl font-bold py-2"> Image Gallery</h1>
      <Slider></Slider>
    </>
  );
};

export default Home;
