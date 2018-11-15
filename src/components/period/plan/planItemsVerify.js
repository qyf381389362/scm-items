import React, { Component } from 'react';
import { Card, Table } from 'antd';
import 'highlight.js/styles/atom-one-dark-reasonable.css';
import './plan.css';

class PlanItemsVerify extends Component {
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

    this.data = [{
        key: '1',
        name: '软件验证结果',
        abbr: 'SVR',
        chapter: '11.14'
      },
      {
        key: '2',
        name: '核查记录',
        abbr: '',
        chapter: ''
      },
      {
        key: '3',
        name: '问题报告',
        abbr: 'PR',
        chapter: '11.17'
      },
      {
        key: '4',
        name: '变更申请',
        abbr: '',
        chapter: ''
      },
      {
        key: '5',
        name: '评审报告',
        abbr: '',
        chapter: ''
      },
      {
        key: '6',
        name: '审查报告',
        abbr: '',
        chapter: ''
      },
      {
        key: '7',
        name: '软件生命周期环境配置索引',
        abbr: 'SLECI',
        chapter: '11.15'
      },
      {
        key: '8',
        name: '软件配置管理索引',
        abbr: 'SCI',
        chapter: '11.16'
      },
      {
        key: '9',
        name: '软件配置状态报告',
        abbr: '',
        chapter: ''
      },
      {
        key: '10',
        name: '软件配置管理记录',
        abbr: 'SCMR',
        chapter: '11.18'
      },
      {
        key: '11',
        name: '软件质量保证记录',
        abbr: 'SQAR',
        chapter: '11.19'
      },
      {
        key: '12',
        name: '软件计划基线',
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
          title="软件计划过程验证与审定配置项"
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

export default PlanItemsVerify;