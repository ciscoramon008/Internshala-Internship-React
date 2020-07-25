import React from 'react'
import BarChart from './BarChart'

const BarChartWrapper = () => {
    return (
        <div className='card mx-2 h-100'>
            <div className='card-header d-flex justify-content-between align-items-center bg-white'>
                <span>Latest Sales</span>
                <div><span>LAST</span>
                    <select className='ml-2' defaultValue='7 days'>
                        <option value='7 days'>7 days</option>
                        <option value='7 weeks'>7 weeks</option>
                        <option value='7 months'>7 months</option>
                        <option value='7 years'>7 years</option>
                    </select>
                </div>
            </div>
            <div className='card-body'>
                <div>
                    <BarChart className='analytics-bar-chart' />
                </div>
            </div>
            <div className='card-footer bg-white w-100 d-flex justify-content-end'>
                <button className='btn btn-outline-primary'>OVERVIEW</button>
            </div>
        </div>
    )
}

export default BarChartWrapper
