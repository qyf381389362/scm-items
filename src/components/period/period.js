import React, { Component } from 'react';
import { Drawer } from 'antd';
import hljs from 'highlight.js/lib/highlight';
import xml from 'highlight.js/lib/languages/xml';

import PlanItems from '../period/plan/planItems';
import PlanItemsVerify from '../period/plan/planItemsVerify';
import RequireItems from '../period/require/requireItems';
import RequireItemsVerify from '../period/require/requireItemsVerify';
import DesignItems from '../period/design/designItems';
import DesignItemsVerify from '../period/design/designItemsVerify';
import CodingItems from '../period/coding/codingItems';
import CodingItemsVerify from '../period/coding/codingItemsVerify';
// import style from './period.less';

import XML from '../../xml/xml';

class Period extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      drawerContent: ''
    }

    this.showDrawer = this.showDrawer.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  showDrawer (record) {
    this.setState({
      visible: true,
      drawerContent: record.name
    });
  }

  onClose () {
    this.setState({
      visible: false
    });
  }

  componentDidMount() {
    hljs.registerLanguage('xml', xml);
    hljs.initHighlightingOnLoad();
  }

  render () {
    return (
      <div>
        <PlanItems showDrawer={ this.showDrawer }/>
        <PlanItemsVerify showDrawer={ this.showDrawer }/>
        <RequireItems showDrawer={ this.showDrawer }/>
        <RequireItemsVerify showDrawer={ this.showDrawer }/>
        <DesignItems showDrawer={ this.showDrawer }/>
        <DesignItemsVerify showDrawer={ this.showDrawer }/>
        <CodingItems showDrawer={ this.showDrawer }/>
        <CodingItemsVerify showDrawer={this.showDrawer }/>

        <Drawer
          title={ `${this.state.drawerContent}内容` }
          placement="right"
          closable={ false }
          onClose={ this.onClose }
          visible={ this.state.visible }
          width="50%"
        >
          {/* <p>{ this.state.drawerContent }</p> */}
          <pre><code class="xml">
            {/* &lt;html&gt;&lt;/html&gt; */}
            { XML[this.state.drawerContent] }
          </code></pre>
        </Drawer>
        {/* <div>
          <pre><code class="xml">
            &lt;html&gt;&lt;/html&gt;
          </code></pre>
        </div> */}
      </div>
    )
  }
}

export default Period;