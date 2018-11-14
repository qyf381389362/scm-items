import React, { Component } from 'react';
import { Form, Drawer, Button, Input, notification } from 'antd';
import hljs from 'highlight.js/lib/highlight';
import xml from 'highlight.js/lib/languages/xml';
import axios from 'axios';

import PlanItems from '../period/plan/planItems';
import PlanItemsVerify from '../period/plan/planItemsVerify';
import RequireItems from '../period/require/requireItems';
import RequireItemsVerify from '../period/require/requireItemsVerify';
import DesignItems from '../period/design/designItems';
import DesignItemsVerify from '../period/design/designItemsVerify';
import CodingItems from '../period/coding/codingItems';
import CodingItemsVerify from '../period/coding/codingItemsVerify';
import './period.css';

import XML from '../../xml/xml';

const FormItem = Form.Item;
const { TextArea } = Input;

class Period extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      drawerTitle: '',
      drawerContent: ''
    }

    this.showDrawer = this.showDrawer.bind(this);
    this.onClose = this.onClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  showDrawer (record) {
    this.setState({
      visible: true,
      drawerTitle: record.name,
      isEdit: false
    });
  }

  onClose () {
    this.setState({
      visible: false
    });
  }

  handleSubmit (e) {
    e.preventDefault();
    let drawerContent = this.props.form.getFieldValue('content');
    console.log(drawerContent);
    if (this.state.isEdit) {
      // 修改内容点击提交时触发
      // alert(`提交 ${this.state.drawerTitle}`);
      // console.log(this.state.drawerContent);
      axios.post('/api/save', {
        key: this.state.drawerTitle,
        content: drawerContent
      }).then((res) => {
        console.log(res.data);
        notification.success({
          message: '修改成功'
        });
      });
    }else {
      // alert(`修改 ${this.state.drawerTitle}`);
      // console.log(this.state.drawerContent);
      // notification.error({
      //   message: '修改失败'
      // });
      axios.get('/api/test').then((res) => {
        console.log(res.data);
      });
    }
    this.setState({
      isEdit: !this.state.isEdit
    });
  }

  componentDidMount() {
    hljs.registerLanguage('xml', xml);
    hljs.initHighlightingOnLoad();
  }

  render () {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="container">
        <PlanItems showDrawer={ this.showDrawer }/>
        <PlanItemsVerify showDrawer={ this.showDrawer }/>
        <RequireItems showDrawer={ this.showDrawer }/>
        <RequireItemsVerify showDrawer={ this.showDrawer }/>
        <DesignItems showDrawer={ this.showDrawer }/>
        <DesignItemsVerify showDrawer={ this.showDrawer }/>
        <CodingItems showDrawer={ this.showDrawer }/>
        <CodingItemsVerify showDrawer={this.showDrawer }/>

        <Drawer
          title={ `${this.state.drawerTitle}内容` }
          placement="right"
          closable={ false }
          onClose={ this.onClose }
          visible={ this.state.visible }
          width="50%"
        >
          <Form onSubmit={ this.handleSubmit }>
            {
              this.state.isEdit
              ? (
                  <FormItem>
                    { getFieldDecorator('content', {})(
                      <TextArea
                        autosize
                        // value={ XML[this.state.drawerTitle] }
                        // value={ this.state.drawerContent }
                      />
                    ) }
                  </FormItem>
              )
              : (
                <FormItem>
                  <pre><code className="xml">
                    { XML[this.state.drawerTitle] }
                  </code></pre>
                </FormItem>
              )
            }
            <FormItem>
              <Button
                className="mt20"
                type="primary"
                htmlType="submit"
                size="large"
              >
                { this.state.isEdit ? '提交' : '修改' }
              </Button>
            </FormItem>
          </Form>
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

export default Form.create()(Period);