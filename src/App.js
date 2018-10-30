import React, { Component } from 'react';
import SiderBar from './siderBar';
import Main from './main';

class App extends Component {
  render() {
    return (
      <div>
        <SiderBar>
          <Main/>
        </SiderBar>
      </div>
    );
  }
}

export default App;
