import React, { useEffect, useState } from 'react';
import { Table, Tooltip } from 'antd';
import Icon from '@ant-design/icons';
import { getListTransaction } from './utils';
import moment from 'moment';
import viewTxImg from './assets/imgs/viewTx';

const columns = [
  {
    title: 'Date',
    dataIndex: 'timestamp',
    key: 'timestamp',
    render: (timestamp) => {
      const dateString = moment.unix(timestamp).format("DD/MM/YYYY HH:mm:ss");
      return <span style={{ color: "#c1c6d2" }}>{dateString}</span>
    }
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
    render: (item, record) => {
      return <span style={{ color: record.type === "buy" ? "#17c671" : "#c4183c" }}>{item}</span>
    }
  },
  {
    title: 'Price USD',
    dataIndex: 'priceUSD',
    key: 'priceUSD',
    render: (item, record) => {
      return <span style={{ color: record.type === "buy" ? "#adffd7" : "#ffafaf" }}>{item}</span>
    }
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
    render: (item, record) => {
      return <span style={{ color: record.type === "buy" ? "#adffd7" : "#ffafaf" }}>{item}</span>
    }
  },
  {
    title: 'Marker',
    dataIndex: 'from',
    key: 'from',
    render: (from, record) => {
      return <span style={{ color: "#00b8d8" }}>{`${from.slice(0, 20)}...`}</span>
    }
  },
  {
    title: 'Other',
    dataIndex: 'tx',
    key: 'tx',
    render: (tx) => {
      const url = `https://scan.factorychain.io/#/txs/${tx}`
      return (
        <Tooltip title="View Tx">
          <Icon
            component={viewTxImg}
            onClick={() => window.open(url, '_blank')}
            type='message'
            theme="outlined"
            style={{ background: '#fff', borderRadius: '15px', border: 'none', fontSize: '16px', position: 'relative' }}
          />
        </Tooltip>

      )

    }
  },
]

const ListTransaction = () => {
  const [listTrans, setListTrans] = useState([])
  useEffect(() => {
    getListTransaction().then(res => {
      // console.log(res.data)
      setListTrans(res.data)
    })
  }, [])
  return (
    <div className="table-trans">
      <Table
        columns={columns}
        dataSource={listTrans}
        scroll={{ x: 800 }}
      />
    </div>
  )
}

export default ListTransaction;
