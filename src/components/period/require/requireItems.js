import React, { Component } from 'react';
import { Card, Table } from 'antd';
import 'highlight.js/styles/atom-one-dark-reasonable.css';

class RequireItems extends Component {
  constructor(props) {
    super(props);

    this.clickTableCell = this.clickTableCell.bind(this);

    this.columns = [
      {
        title: '软件生命周期配置项',
        dataIndex: 'name',
        key: 'name',
        render: (text, record) => <a href="javascript:;" onClick={ this.clickTableCell.bind(this, record) }>{ text }</a>
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

    this.data = [{
        key: '1',
        name: '系统需求',
        abbr: 'SR',
        chapter: ''
      },
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
        name: '软件需求标准',
        abbr: 'SRS',
        chapter: '11.6'
      },
      {
        key: '6',
        name: '软件高层需求结构',
        abbr: '',
        chapter: ''
      },
      {
        key: '7',
        name: '软件高层需求(条目)',
        abbr: '',
        chapter: ''
      },
      {
        key: '8',
        name: '软件需求描述',
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
          title="软件需求过程配置项"
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

export default RequireItems;