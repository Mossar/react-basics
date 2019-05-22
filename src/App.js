import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.scss';
import Menu from './menu/Menu';
import About from './about/About';
import Contact from './contact/Contact';

function App() {
  return (
    <div className="app">
      <Router>
        <Menu/>
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
      </Router>
    </div>
  );
}

export default App;
