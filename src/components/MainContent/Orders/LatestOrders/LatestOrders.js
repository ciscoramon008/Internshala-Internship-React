import React from 'react'
import { BsArrowUp } from 'react-icons/bs'
import LatestOrderItem from './LatestOrderItem'

function LatestOrders({ latestOrders }) {
    return (
        <div className='card mx-2'>
            <div className='card-header bg-white d-flex justify-content-between align-items-center py-2'>
                <p className='card-text m-0'>Latest Orders</p>
                <button className='btn btn-sm btn-outline-secondary'>NEW ENTRY</button>
            </div>
            <div className='table-responsive'>
                <table className='table'>
                    <thead className='thead-light'>
                        <tr>
                            <th scope="col" className='font-weight-normal text-nowrap'>Order Ref</th>
                            <th scope="col" className='font-weight-normal'>Customer</th>
                            <th scope="col" className='font-weight-normal'>Date <BsArrowUp size='1.2rem' className='cursor-pointer' /></th>
                            <th scope="col" className='font-weight-normal'>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {latestOrders.map(order => <LatestOrderItem
                            key={order.orderRef}
                            orderRef={order.orderRef}
                            customer={order.customer}
                            date={order.date}
                            status={order.status}
                        />)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default LatestOrders