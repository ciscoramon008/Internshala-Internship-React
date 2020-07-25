import React from 'react'
import { GoPrimitiveDot } from "react-icons/go";

function LatestOrderItem({ orderRef, customer, date, status }) {
    const dotColor = {
        success: 'green',
        pending: 'yellow',
        failed: 'red'
    }
    return (
        <div className='row no-gutters p-3'>
            <div className='col-3'><p className='m-0'>{orderRef}</p></div>
            <div className='col-4'><p className='m-0'>{customer}</p></div>
            <div className='col-2'><p className='m-0'>{date}</p></div>
            <div className='col-3'><p className='m-0'>
                <GoPrimitiveDot color={dotColor[`${status}`]} /><span className='ml-2'>{status}</span></p>
            </div>
        </div>
    )
}

export default LatestOrderItem