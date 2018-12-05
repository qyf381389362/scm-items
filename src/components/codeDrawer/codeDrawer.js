import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import hljs from 'highlight.js/lib/highlight';
import xml from 'highlight.js/lib/languages/xml';

import './codeDrawer.css';

const FormItem = Form.Item;
const { TextArea } = Input;

class CodeDrawer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showWrapper: false
    }

    this.clickMask = this.clickMask.bind(this);
  }

  componentDidMount() {
    hljs.registerLanguage('xml', xml);
    hljs.initHighlightingOnLoad();
  }
  
  clickMask () {
    this.props.checkMask();
  }

  handleSubmit (e) {
    const propsForm = this.props.form;
    e.preventDefault();
    let drawerContent = propsForm.getFieldValue('content');
    
  }

  render () {
    const { getFieldDecorator } = this.props.form;
    return (
      <div 
        className={ `drawerWrapper ${ this.props.visible ? '' : 'hide'}` }
        onClick={ this.clickMask }
      >
        <div className="contentWrapper">
          <div className="titleStyle">{ this.props.title }内容</div>
          <div className="content">
            <Form onSubmit={ this.handleSubmit }>
              {
                this.props.isEdit
                ? (
                    <FormItem>
                      { getFieldDecorator('content', {})(
                        <TextArea autosize />
                      ) }
                    </FormItem>
                )
                : (
                  <FormItem>
                    <pre>
                      <code className="xml">
                        { this.props.drawerContent }
                      </code>
                    </pre>
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
                  { this.props.isEdit ? '提交' : '修改' }
                </Button>
              </FormItem>
          </Form>
            <pre><code className="xml">
              &lt;html&gt;&lt;/html&gt;
            </code></pre>
          </div>
        </div>
      </div>
    )
  }
}

export default Form.create()(CodeDrawer);
