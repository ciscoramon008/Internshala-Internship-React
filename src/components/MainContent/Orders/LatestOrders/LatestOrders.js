import React from 'react'
import { BsArrowUp } from "react-icons/bs";
import LatestOrderItem from './LatestOrderItem'

function LatestOrders({ latestOrders }) {
    return (
        <div className='card mx-2'>
            <div className='card-header bg-white d-flex justify-content-between align-items-center p-2'>
                <p className='card-text m-0'>Latest Orders</p>
                <button className='btn btn-sm btn-outline-secondary'>NEW ENTRY</button>
            </div>
            <div className='card-header row no-gutters'>
                <div className='col-3'><p className='m-0'>Order Ref</p></div>
                <div className='col-4'><p className='m-0'>Customer</p></div>
                <div className='col-2'><p className='m-0'>Date <BsArrowUp size='1.2rem' className='cursor-pointer' /></p></div>
                <div className='col-3'><p className='m-0'>Status</p></div>
            </div>
            <div className='card-body p-0'>
                {latestOrders.map(order => <LatestOrderItem
                    key={order.orderRef}
                    orderRef={order.orderRef}
                    customer={order.customer}
                    date={order.date}
                    status={order.status}
                />)}
            </div>
        </div>
    )
}

export default LatestOrders