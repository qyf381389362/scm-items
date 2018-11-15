import React, { Component } from 'react';
import { Card, Table } from 'antd';
import './requireItems.css';

class RequireItemsVerify extends Component {
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
        name: '软件验证计划',
        abbr: 'SVP',
        chapter: '11.3'
      },
      {
        key: '3',
        name: '软件配置管理计划',
        abbr: 'SCMP',
        chapter: '11.4'
      },
      {
        key: '4',
        name: '软件质量保证计划',
        abbr: 'SQAP',
        chapter: '11.5'
      },
      {
        key: '5',
        name: '软件合格审定计划',
        abbr: 'PSAC',
        chapter: '11.1'
      },
      {
        key: '6',
        name: '核查检查单',
        abbr: '',
        chapter: ''
      },
      {
        key: '7',
        name: '评审检查单',
        abbr: '',
        chapter: ''
      },
      {
        key: '8',
        name: '审查检查单',
        abbr: '',
        chapter: ''
      },
      {
        key: '9',
        name: '高层需求与系统需求追踪数据',
        abbr: 'TD',
        chapter: '11.21'
      },
      {
        key: '10',
        name: '高层需求到系统需求的符合性验证',
        abbr: '',
        chapter: ''
      },
      {
        key: '11',
        name: '高层需求核查记录',
        abbr: '',
        chapter: ''
      },
      {
        key: '12',
        name: '问题报告',
        abbr: 'PR',
        chapter: '11.17'
      },
      {
        key: '13',
        name: '变更申请',
        abbr: '',
        chapter: ''
      },
      {
        key: '14',
        name: '高层需求评审报告',
        abbr: '',
        chapter: ''
      },
      {
        key: '15',
        name: '审查报告',
        abbr: '',
        chapter: ''
      },
      {
        key: '16',
        name: '软件生命周期环境配置索引',
        abbr: 'SLECI',
        chapter: '11.15'
      },
      {
        key: '17',
        name: '软件配置管理索引',
        abbr: 'SCI',
        chapter: '11.16'
      },
      {
        key: '18',
        name: '软件配置状态报告',
        abbr: '',
        chapter: ''
      },
      {
        key: '19',
        name: '软件配置管理记录',
        abbr: 'SCMR',
        chapter: '11.18'
      },
      {
        key: '20',
        name: '软件质量保证记录',
        abbr: 'SQAR',
        chapter: '11.19'
      },
      {
        key: '21',
        name: '软件高层需求基线',
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
          title="软件需求过程验证与审定配置项"
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

export default RequireItemsVerify;