import React from 'react'
import SidebarNav from './components/SidebarNav/SidebarNav';
import MainContent from './components/MainContent/MainContent';

const FrontGrid = () => {
    return (
        <div className='row no-gutters' style={{width: '100%'}}>
            <div className='col-md-2'><SidebarNav /></div>
            <div className='col-md-10'><MainContent /></div>
        </div>
    )
}

export default FrontGrid