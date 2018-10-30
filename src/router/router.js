import React, { Component } from 'react';
// import { Router, Route} from 'react-router';
import { HashRouter } from 'react-router-dom'

import App from '../App';

class Routers extends Component {
  render () {
    return (
      <HashRouter>
        <App/>
      </HashRouter>
    )
  }
}

export default Routers;