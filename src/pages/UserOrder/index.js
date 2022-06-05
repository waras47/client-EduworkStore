import { FaFileInvoiceDollar } from '@meronex/icons/fa'
import React from 'react'
import { Link } from 'react-router-dom'
import { Button, LayoutOne, Table, Text } from 'upkit'
import TopBar from '../../components/TopBar'
import {getOrders} from '../../app/api/order'

const columns = [
  {
    Header: '', 
    id: 'Status', 
    accessor: order => {
      return <div>
      #{order.order_number} <br/> 

      </div> 
    }
  },
  {
    Header: 'Items', 
    accessor: order => {
      return <div>
        {order.order_items.map(item => {
          return <div key={item._id}>
            {item.name} {item.qty}
          </div>
        })}
      </div>
    }
  },
  {
    Header: 'Total',
    accessor: order => {
      return <div>
        { order.delivery_fee}
      </div>
    }
  },
  {
    Header: 'Invoice',
    accessor: order => {
      return <div>
        <Link to={`/invoice/${order._id}`}>
          <Button color="gray" iconBefore={<FaFileInvoiceDollar/>}>
            Invoice
          </Button>
        </Link>
      </div>
    }
  }
]

export default function UserOrder() {
  
  let [pesanan, setPesanan] = React.useState([]);
  let [count, setCount] = React.useState(0);
  let [status, setStatus] = React.useState('idle');
  let [page, setPage] = React.useState(1);
  let [limit, setLimit] = React.useState(10);

  const fetchPesanan =  React.useCallback ( async () => {
    setStatus('process');

    let {data} = await getOrders({limit, page});

    if(data.error) {
      setStatus('error');
      return ;
    }

    setStatus('success');
    setPesanan(data.data);
    setCount(data.count);

  }, [page, limit]);

  React.useEffect(() => {
    fetchPesanan();

  }, [fetchPesanan]);

  return (
    <LayoutOne>
       <TopBar/>
       <Text as="h3"> Pesanan Anda </Text>
       <br />

       <Table
         items={pesanan}
         totalItems={count}
         columns={columns}
         onPageChange={page => setPage(page)}
         page={page}
         isLoading={status === 'process'}
       />

     </LayoutOne>
  )
}
