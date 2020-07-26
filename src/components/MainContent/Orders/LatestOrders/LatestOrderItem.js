import React from 'react'
import { GoPrimitiveDot } from "react-icons/go";

function LatestOrderItem({ orderRef, customer, date, status }) {
    const dotColor = {
        success: 'green',
        pending: 'yellow',
        failed: 'red'
    }
    return (
        <tr>
            <td>{orderRef}</td>
            <td className='text-nowrap'>{customer}</td>
            <td>{date}</td>
            <td className='text-nowrap'><GoPrimitiveDot color={dotColor[`${status}`]} /><span className='ml-2'>{status}</span></td>
        </tr>
    )
}

export default LatestOrderItem