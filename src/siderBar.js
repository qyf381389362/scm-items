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
        <Layout style={{ minHeight: '100vh' }}>
          <Sider>
            <div className="logo"/>
            <Menu
              theme="dark"
              defaultSelectedKeys={ ['0'] }
              mode="inline"
            >
              <Menu.Item key="0">
                <Link to="/total">配置项控制类</Link>
              </Menu.Item>
              <SubMenu
                key="1"
                title={ <Link to="/period">生命周期各阶段配置项</Link> }
              >
                <Menu.Item key="1-1"><Link to="/period">软件计划过程配置项</Link></Menu.Item >
                <Menu.Item key="1-2">软件计划过程验证与审定配置项</Menu.Item>
                <Menu.Item key="1-3">软件需求过程配置项</Menu.Item>
                <Menu.Item key="1-4">软件需求过程验证与审定配置项</Menu.Item>
                <Menu.Item key="1-5">软件设计过程配置项</Menu.Item>
                <Menu.Item key="1-6"><Link to="#designItemsVerify">软件设计过程验证与审定配置项</Link></Menu.Item>
                <Menu.Item key="1-7">软件编码过程配置项</Menu.Item>
                <Menu.Item key="1-8">软件编码过程验证与审定配置项</Menu.Item>
                <Menu.Item key="1-9">软件集成过程配置项</Menu.Item>
                <Menu.Item key="1-10">软件集成过程验证与审定配置项</Menu.Item>
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

