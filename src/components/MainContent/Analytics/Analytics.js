import React from 'react'
import BarChart from './BarChart'
import DonutChartWrapper from './DoughnutChart/DonutChartWrapper'

const Analytics = () => {
    return (
        <div className='row no-gutters mt-4'>
            <div className='col-12 col-md-9'><BarChart /></div>
            <div className='col-12 col-md-3'><DonutChartWrapper /></div>
        </div>
    )
}

export default Analytics
