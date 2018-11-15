import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

// import menuConfig from './menuConfig';

const { Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class SiderBar extends Component {
  // constructor(props) {
  //   this.state = {
  //     collapsed: false
  //   }
  // }

  render() {
    return (
      <div>
        <Layout style={{ minHeight: '100vh', flexBasis: '260px' }}>
          <Sider width={ 260 }>
            <Menu
              theme="dark"
              defaultSelectedKeys={ ['0'] }
              mode="inline"
              style={{ position: 'fixed', width: 260 }}
            >
              <Menu.Item key="0">
                <Link to="/total">配置项控制类</Link>
              </Menu.Item>
              <SubMenu
                key="1"
                title={ <Link to="/period">生命周期各阶段配置项</Link> }
              >
                  <Menu.Item key="1-1"><a href="/period#planItems">软件计划过程配置项</a></Menu.Item>
                  <Menu.Item key="1-2"><a href="/period#planItemsVerify">软件计划过程验证与审定配置项</a></Menu.Item>
                  <Menu.Item key="1-3"><a href="/period#requireItems">软件需求过程配置项</a></Menu.Item>
                  <Menu.Item key="1-4"><a href="/period#requireItemsVerify">软件需求过程验证与审定配置项</a></Menu.Item>
                  <Menu.Item key="1-5"><a href="/period#designItems">软件设计过程配置项</a></Menu.Item>
                  <Menu.Item key="1-6"><a href="/period#designItemsVerify">软件设计过程验证与审定配置项</a></Menu.Item>
                  <Menu.Item key="1-7"><a href="/period#codingItems">软件编码过程配置项</a></Menu.Item>
                  <Menu.Item key="1-8"><a href="/period#codingItemsVerify">软件编码过程验证与审定配置项</a></Menu.Item>
                  <Menu.Item key="1-9"><a href="/period#integratedItems">软件集成过程配置项</a></Menu.Item>
                  <Menu.Item key="1-10"><a href="/period#integratedItemsVerify">软件集成过程验证与审定配置项</a></Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ margin: '0 16px' }}>
              {/* <div style={{ padding: 24,background: '#fff',minHeight: 360 }}>
                Bill is a cat.
              </div> */}
              { this.props.children }
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              ACT© 2018 Created by 秦雨霏
            </Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default SiderBar;

