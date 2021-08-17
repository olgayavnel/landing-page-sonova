import React from 'react';
import Banner from '../components/Banner/Banner';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import Navbar from '../components/Navbar/Navbar';
import Wrapper from '../components/Wrapper/Wrapper';

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Wrapper />
      <Banner />
      <Footer />
    </>
  );
}

export default Home;
