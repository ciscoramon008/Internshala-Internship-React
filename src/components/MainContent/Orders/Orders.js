import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { GrDropbox } from "react-icons/gr";
import LatestProducts from './LatestProducts/LatestProducts'
import LatestOrders from './LatestOrders/LatestOrders'

function Orders() {
    const latestOrders = [
        {
            orderRef: '1CO90A25',
            customer: 'Jane Doe',
            date: '25/10/19',
            status: 'pending'
        },
        {
            orderRef: '89GH55E',
            customer: 'Ronald Jobs',
            date: '09/05/19',
            status: 'success'
        }
    ]

    const latestProducts = [
        {
            icon: <GrDropbox size='2rem' color='blue' />,
            name: 'Dropbox',
            updated: '2 minutes ago',
        },
        {
            icon: <FcGoogle size='2rem' />,
            name: 'Google',
            updated: '2 months ago',
        }
    ]

    return (
        <div className='row no-gutters mt-4'>
            <div className='col-lg-3'><LatestProducts latestProducts={latestProducts} /></div>
            <div className='col-lg-9'><LatestOrders latestOrders={latestOrders} /></div>
        </div>
    )
}

export default Orders