import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// components
import Header from './Components/headerComponent/header';
import Homepage from './pages/home';
import About from './pages/About';
import Error from "./pages/Error";


function App() {
  return (
      <div className="wraper">
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/about" component={About} />
          <Route component={Error} />
        </Switch>
      </div>
  )
}

export default App;
