import React, { Component } from 'react';
import { Card, Table } from 'antd';
import './integrated.css';

class IntegratedItems extends Component {
  constructor(props) {
    super(props);

    this.clickTableCell = this.clickTableCell.bind(this);

    this.columns = [
      {
        title: '软件生命周期配置项',
        dataIndex: 'name',
        key: 'name',
        render: (text, record) => <span className="spanStyle" onClick = { this.clickTableCell.bind(this, record) }>{text}</span>
      },
      {
        title: '缩写',
        dataIndex: 'abbr',
        key: 'abbr',
      },
      {
        title: 'DO-178C',
        dataIndex: 'chapter',
        key: 'chapter',
      }
    ];

    this.data = [
      {
        key: '2',
        name: '软件等级',
        abbr: '',
        chapter: ''
      },
      {
        key: '3',
        name: '软件开发计划',
        abbr: 'SDP',
        chapter: '11.2'
      },
      {
        key: '4',
        name: '软件配置管理计划',
        abbr: 'SCMP',
        chapter: '11.4'
      },
      {
        key: '5',
        name: '软件架构',
        abbr: '',
        chapter: ''
      },
      {
        key: '6',
        name: '源代码',
        abbr: 'SC',
        chapter: '11.11'
      },
      {
        key: '7',
        name: '目标代码',
        abbr: '',
        chapter: ''
      },
      {
        key: '8',
        name: '可执行目标码',
        abbr: '',
        chapter: ''
      },
      {
        key: '9',
        name: '加载控制记录',
        abbr: '',
        chapter: ''
      },
      {
        key: '10',
        name: '编译、链接、加载日志',
        abbr: '',
        chapter: ''
      }
    ];
  }

  clickTableCell (record) {
    this.props.showDrawer(record);
  }

  render () {
    return (
      <div>
        <Card
          title={ <span id="integratedItems">软件集成过程配置项</span> }
          style={{ marginTop: 20 }}
        >
          <Table
            columns={ this.columns }
            dataSource={ this.data }
            pagination={ false }
          />
        </Card>
      </div>
    )
  }
}

export default IntegratedItems;