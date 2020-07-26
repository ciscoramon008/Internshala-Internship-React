import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { GrDropbox } from "react-icons/gr";
import LatestProducts from './LatestProducts/LatestProducts'
import LatestOrders from './LatestOrders/LatestOrders'

const Orders = () => {
    const latestOrders = [
        {
            orderRef: '1CO90A25',
            customer: 'Jane Doe',
            date: '25/10/19',
            status: 'pending'
        },
        {
            orderRef: '89GH55EG',
            customer: 'Ronald Jobs',
            date: '09/05/19',
            status: 'success'
        },
        {
            orderRef: 'RO02POLL',
            customer: 'Joker DC',
            date: '12/12/18',
            status: 'failed'
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
            <div className='my-2 col-12 col-md-5 col-xl-3'><LatestProducts latestProducts={latestProducts} /></div>
            <div className='my-2 col-12 col-md-7 col-xl-9'><LatestOrders latestOrders={latestOrders} /></div>
        </div>
    )
}

export default Orders