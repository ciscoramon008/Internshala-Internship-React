import React from 'react'
import './MainContent.css'
import TopRow from './TopRow/TopRow'
import Analytics from './Analytics/Analytics'

function MainContent() {
    return (
        <div className='main-container h-100'>
            <TopRow />
            <Analytics />
        </div>
    )
}

export default MainContent