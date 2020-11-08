import React from 'react';
import { Helmet } from 'react-helmet';
import '../App.css';

import Navigation from '../components/navigation/Navigation.js'
import HeadImage from '../components/mainComponents/HeadImage.js'
import AboutMe from '../components/mainComponents/AboutMe.js';
import Portfolio from '../components/mainComponents/Portfolio.js';
import Technologies from '../components/mainComponents/Technologies.js';
import Footer from '../components/mainComponents/Footer.js';

// NOTE: IMPORTANCE ----- Responsive! Regardless of screen size, 4k 8k, Nokia 3310 ( MAKE IT WORK )

// Focus on one component at a time - Dont go building multiple components

// After building one component make it responsive.

export default function App() {
  return (
    <div>
      <Helmet>
        <title>James Dylan White</title>
        <meta name="description" content="James Dylan White" />
      </Helmet>
      <Navigation />
      <HeadImage/>
      <AboutMe/>
      <Portfolio/>
      <Technologies/>
      <Footer />
    </div>
  );
}
