import React from 'react';
import { Helmet } from 'react-helmet';
import '../App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import Navigation from '../components/navigation/Navigation.js'

// NOTE: IMPORTANCE ----- Responsive! Regardless of screen size, 4k 8k, Nokia 3310 ( MAKE IT WORK )

// Focus on one component at a time - Dont go building multiple components

// After building one component make it responsive.

export default function App() {
  return (
    <Router>
      <Helmet>
        <title>James Dylan White</title>
        <meta name="description" content="James Dylan White" />
      </Helmet>
      <Navigation />
      <Switch>
        <Route exact path="/" component={ null }/>
      </Switch>
    </Router>
  );
}
