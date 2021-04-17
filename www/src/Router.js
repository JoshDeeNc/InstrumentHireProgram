import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Home';
import AddHire from './AddHire';

function RTR() {

    return (
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route path="/addhire" component={AddHire} />
        </div>
      </Router>
    );
}

export default RTR;