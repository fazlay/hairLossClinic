import { useEffect, useState } from 'react';

const useService = () => {

    const [services, setServices]= useState()
  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [services]);
  return {services}
};

export default useService;
//https://jsonkeeper.com/b/9AZA