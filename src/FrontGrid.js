import React from 'react'
import SidebarNav from './components/SidebarNav/SidebarNav';
import MainContent from './components/MainContent/MainContent';

const FrontGrid = () => {
    return (
        <div className='row no-gutters' style={{width: '100%'}}>
            <div><SidebarNav /></div>
            <div className='col'><MainContent /></div>
        </div>
    )
}

export default FrontGrid