import React,  { Component } from 'react';
import { Card, Table } from 'antd';

const columns = [
  {
    title: '软件生命周期配置项',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href="javascript:;">{ text }</a>,
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
  },
  {
    title: 'A',
    dataIndex: 'levelA',
    key: 'levelA'
  },
  {
    title: 'B',
    dataIndex: 'levelB',
    key: 'levelB'
  },
  {
    title: 'C',
    dataIndex: 'levelC',
    key: 'levelC'
  },
  {
    title: 'D',
    dataIndex: 'levelD',
    key: 'levelD'
  }
];

const data = [
  {
    key: '1',
    name: '软件合格审定计划',
    abbr: 'PSAC',
    chapter: '11.1',
    levelA: 'CC1',
    levelB: 'CC1',
    levelC: 'CC1',
    levelD: 'CC1'
  },
  {
    key: '2',
    name: '软件开发计划',
    abbr: 'SDP',
    chapter: '11.2',
    levelA: 'CC1',
    levelB: 'CC1',
    levelC: 'CC2',
    levelD: 'CC2'
  },
  {
    key: '3',
    name: '软件验证计划',
    abbr: 'SVP',
    chapter: '11.3',
    levelA: 'CC1',
    levelB: 'CC1',
    levelC: 'CC2',
    levelD: 'CC2'
  },
  {
    key: '4',
    name: '软件配置管理计划',
    abbr: 'SCMP',
    chapter: '11.4',
    levelA: 'CC1',
    levelB: 'CC1',
    levelC: 'CC2',
    levelD: 'CC2'
  },
  {
    key: '5',
    name: '软件质量保证计划',
    abbr: 'SQAP',
    chapter: '11.5',
    levelA: 'CC1',
    levelB: 'CC1',
    levelC: 'CC2',
    levelD: 'CC2'
  },
  {
    key: '6',
    name: '软件需求标准',
    abbr: 'SRS',
    chapter: '11.6',
    levelA: 'CC1',
    levelB: 'CC1',
    levelC: 'CC2',
    levelD: 'N/A'
  },
  {
    key: '7',
    name: '软件设计标准',
    abbr: 'SDS',
    chapter: '11.7',
    levelA: 'CC1',
    levelB: 'CC1',
    levelC: 'CC2',
    levelD: 'N/A'
  },
  {
    key: '8',
    name: '软件编码标准',
    abbr: 'SCS',
    chapter: '11.8',
    levelA: 'CC1',
    levelB: 'CC1',
    levelC: 'CC2',
    levelD: 'N/A'
  },
  {
    key: '9',
    name: '软件需求数据',
    abbr: 'SRD',
    chapter: '11.8',
    levelA: 'CC1',
    levelB: 'CC1',
    levelC: 'CC1',
    levelD: 'CC1'
  },
  {
    key: '10',
    name: '软件设计描述',
    abbr: 'SDD',
    chapter: '11.10',
    levelA: 'CC1',
    levelB: 'CC1',
    levelC: 'CC1',
    levelD: 'CC2*'
  },
  {
    key: '11',
    name: '源代码',
    abbr: 'SC',
    chapter: '11.11',
    levelA: 'CC1',
    levelB: 'CC1',
    levelC: 'CC1',
    levelD: 'CC1'
  },
  {
    key: '12',
    name: '可执行目标码',
    abbr: 'EOC',
    chapter: '11.12',
    levelA: 'CC1',
    levelB: 'CC1',
    levelC: 'CC1',
    levelD: 'CC1'
  },
  {
    key: '13',
    name: '软件验证用例/规程',
    abbr: 'SVCP',
    chapter: '11.13',
    levelA: 'CC1',
    levelB: 'CC1',
    levelC: 'CC2',
    levelD: 'CC2*'
  },
  {
    key: '14',
    name: '软件验证结果',
    abbr: 'SVR',
    chapter: '11.14',
    levelA: 'CC2',
    levelB: 'CC2*',
    levelC: 'CC2*',
    levelD: 'CC2*'
  },
  {
    key: '15',
    name: '软件生命周期环境配置索引',
    abbr: 'SLECI',
    chapter: '11.15',
    levelA: 'CC1',
    levelB: 'CC1',
    levelC: 'CC1',
    levelD: 'CC2'
  },
  {
    key: '16',
    name: '软件配置索引',
    abbr: 'SCI',
    chapter: '11.16',
    levelA: 'CC1',
    levelB: 'CC1',
    levelC: 'CC1',
    levelD: 'CC1'
  },
  {
    key: '17',
    name: '问题报告',
    abbr: 'PR',
    chapter: '11.17',
    levelA: 'CC2',
    levelB: 'CC2',
    levelC: 'CC2',
    levelD: 'CC2'
  },
  {
    key: '18',
    name: '软件配置管理记录',
    abbr: 'SCMR',
    chapter: '11.18',
    levelA: 'CC2',
    levelB: 'CC2',
    levelC: 'CC2',
    levelD: 'CC2'
  },
  {
    key: '19',
    name: '软件质量保证记录',
    abbr: 'SQAR',
    chapter: '11.19',
    levelA: 'CC2',
    levelB: 'CC2',
    levelC: 'CC2',
    levelD: 'CC2*'
  },
  {
    key: '20',
    name: '软件完成总结',
    abbr: 'SAS',
    chapter: '11.20',
    levelA: 'CC1',
    levelB: 'CC1',
    levelC: 'CC1',
    levelD: 'CC1'
  },
  {
    key: '21',
    name: '追踪数据（开发）',
    abbr: 'TD',
    chapter: '11.21',
    levelA: 'CC1',
    levelB: 'CC1',
    levelC: 'CC2',
    levelD: 'CC1'
  },
  {
    key: '22',
    name: '追踪数据（验证）',
    abbr: 'TD',
    chapter: '11.21',
    levelA: 'CC1',
    levelB: 'CC1',
    levelC: 'CC2',
    levelD: 'CC2*'
  },
  {
    key: '23',
    name: '参数数据项文件',
    abbr: 'PDIF',
    chapter: '11.22',
    levelA: 'CC1',
    levelB: 'CC1',
    levelC: 'CC1',
    levelD: 'CC1'
  }
];

class Total extends Component {
  render () {
    return (
      <div>
        <Card style={{ marginTop: 20 }}>
          <Table
            columns={ columns }
            dataSource={ data }
          />
        </Card>
      </div>
    )
  }
}

export default Total;