// App.js

import React from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
      <Navigation />
      <Routes>
      <Route exact path="/" component={Home}></Route>
      </Routes>
      </Router>
     
    </div>
  );
}

export default App;
