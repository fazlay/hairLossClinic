import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import DeltailsCard from './DetailsCard';

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const [shows, setShows] = useState([]);
  useEffect(() => {
    fetch('/fakeData.json')
      .then((res) => res.json())
      .then((data) => setShows(data));
  }, []);

  return (
    <div>
      {shows
        .filter((show) => parseInt(show.id) === parseInt(serviceId))
        .map((show) => (
          <DeltailsCard show={show}></DeltailsCard>
        ))}
    </div>
  );
};

export default ServiceDetails;
