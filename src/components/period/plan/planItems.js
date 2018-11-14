import React, { Component } from 'react';
import { Card, Table } from 'antd';
import 'highlight.js/styles/atom-one-dark-reasonable.css';

class PlanItems extends Component {
  constructor(props) {
    super(props);

    this.clickTableCell = this.clickTableCell.bind(this);

    this.columns = [
      {
        title: '软件生命周期配置项',
        dataIndex: 'name',
        key: 'name',
        render: (text, record) => <a href="#/" onClick={ this.clickTableCell.bind(this, record) }>{ text }</a>
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
        name: '软件合格审定计划',
        abbr: 'PSAC',
        chapter: '11.1'
      },
      {
        key: '4',
        name: '软件开发计划',
        abbr: 'SDP',
        chapter: '11.2'
      },
      {
        key: '5',
        name: '软件验证计划',
        abbr: 'SVP',
        chapter: '11.3'
      },
      {
        key: '6',
        name: '软件配置管理计划',
        abbr: 'SCMP',
        chapter: '11.4'
      },
      {
        key: '7',
        name: '软件质量保证计划',
        abbr: 'SQAP',
        chapter: '11.5'
      },
      {
        key: '8',
        name: '软件需求标准',
        abbr: 'SRS',
        chapter: '11.6'
      },
      {
        key: '9',
        name: '软件设计标准',
        abbr: 'SDS',
        chapter: '11.7'
      },
      {
        key: '10',
        name: '软件编码标准',
        abbr: 'SCS',
        chapter: '11.8'
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
          title="软件计划过程配置项"
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

export default PlanItems;