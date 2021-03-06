import React, { Component } from 'react';
import { Card, Table } from 'antd';
import './codingItems.css';

class CodingItems extends Component {
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
        key: '1',
        name: '低层需求',
        abbr: 'LLR',
        chapter: ''
      },
      {
        key: '2',
        name: '软件架构',
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
        name: '软件编码标准',
        abbr: 'SCS',
        chapter: '11.8'
      },
      {
        key: '6',
        name: '软件设计说明',
        abbr: '',
        chapter: ''
      },
      {
        key: '7',
        name: '源代码',
        abbr: 'SC',
        chapter: '11.11'
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
          title={ <span id="codingItems">软件编码过程配置项</span> }
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

export default CodingItems;