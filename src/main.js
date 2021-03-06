import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Total from './components/total/total';
import Period from './components/period/period';

class Main extends Component {
  render () {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={ Total }/>
          <Route path="/total" component={ Total }/>
          <Route path="/period" component={ Period }/>
        </Switch>
      </div>
    )
  }
}

export default Main;