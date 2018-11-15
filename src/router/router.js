import React, { Component } from 'react';
// import { Router, Route} from 'react-router';
import { BrowserRouter } from 'react-router-dom'

import App from '../App';

class Routers extends Component {
  render () {
    return (
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    )
  }
}

export default Routers;