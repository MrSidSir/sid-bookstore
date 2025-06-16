import React from 'react'
import Banner from './Banner';
import TopSellers from './TopSellers'
import Recommened from './recommened';

const Home = () => {
  return (
    <>
     <Banner />
     <TopSellers />
     <Recommened/>
    </>
  );
};

export default Home;