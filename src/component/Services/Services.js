import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('fakeData.json')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <>
      <h2 className='text-2xl font-extrabold text-center text-gray-900'>
        OUR SERVICES
      </h2>
      <section className='lg:mt-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8'>
        {services.map((service) => (
          <Card key={service.id} service={service}></Card>
        ))}
      </section>
    </>
  );
};

export default Services;
