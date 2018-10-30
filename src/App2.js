import React, { Component } from 'react';
import logo from './logo.svg';
import hljs from 'highlight.js/lib/highlight';
import xml from 'highlight.js/lib/languages/xml';
import 'highlight.js/styles/atom-one-dark-reasonable.css';
import './App.css';
import { Table } from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age'
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address'
  }
];

const data = [
  {
    key: '1',
    name: 'qinyufei',
    age: 23,
    address: '北京'
  }
];

class App2 extends Component {
  componentDidMount() {
    hljs.registerLanguage('xml', xml);
    hljs.initHighlightingOnLoad();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <pre><code class="xml">
          &lt;html&gt;&lt;/html&gt;
        </code></pre>
        <Table 
          columns={ columns }
          dataSource={ data }
        />
          
      </div>
    );
  }
}

export default App2;
