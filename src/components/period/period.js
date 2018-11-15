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
import IntegratedItems from '../period/integrated/integratedItems';
import IntegratedItemsVerify from '../period/integrated/integratedItemsVerify';
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
    this.getInfo(record.name);
  }

  onClose () {
    this.setState({
      visible: false
    });
  }

  handleSubmit (e) {
    const propsForm = this.props.form;
    e.preventDefault();
    let drawerContent = propsForm.getFieldValue('content');

    if (this.state.isEdit) {
      // 修改内容点击提交时触发
      axios.post('/api/update', {
        key: this.state.drawerTitle,
        content: drawerContent
      })
      .then((res) => {
        notification.success({
          message: '修改成功'
        });

        this.getInfo(this.state.drawerTitle);

        this.setState({
          isEdit: !this.state.isEdit
        });
      })
      .catch((error) => {
        notification.error({
          message: '修改失败'
        });
      });
    } else {
      this.setState({
        isEdit: !this.state.isEdit
      });

      propsForm.setFieldsValue({
        content: this.state.drawerContent
      });
    }
  }

  getInfo (key) {
    axios.get('/api/info', 
    {
      params: {
        key: key
      }
    }
    )
    .then((res) => {
      this.setState({
        drawerContent: res.data.content
      });
      // console.log(res.data.content);
    })
    .catch((err) => {
        notification.error({
          message: '获取配置项信息失败'
        });
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
        <IntegratedItems showDrawer={this.showDrawer }/>
        <IntegratedItemsVerify showDrawer={this.showDrawer }/>

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
                    {/* { this.state.drawerContent } */}
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