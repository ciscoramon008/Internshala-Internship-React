import React from 'react'
import DonutChartWrapper from './DoughnutChart/DonutChartWrapper'
import BarChartWrapper from './BarChart/BarChartWrapper'

const Analytics = () => {
    return (
        <div className='row no-gutters mt-4'>
            <div className='col-12 col-xl-9 mb-2'><BarChartWrapper /></div>
            <div className='col-12 col-xl-3'><DonutChartWrapper /></div>
        </div>
    )
}

export default Analytics
