import React from 'react'
import './MainContent.css'
import TopRow from './TopRow/TopRow'
import Analytics from './Analytics/Analytics'
import Orders from './Orders/Orders'

function MainContent() {
    return (
        <div className='main-container h-100'>
            <TopRow />
            <Analytics />
            <Orders />
        </div>
    )
}

export default MainContent