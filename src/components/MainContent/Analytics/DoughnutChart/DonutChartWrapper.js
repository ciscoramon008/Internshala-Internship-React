import React from 'react'
import { AiOutlineReload } from "react-icons/ai";
import './DonutChartWrapper.css'
import DoughnutChart from './DoughnutChart';
import DevicesList from './DevicesList';

function DonutChartWrapper() {
    return (
        <div className='card donut-chart-wrapper mx-2 h-100'>
            <div className='card-header d-flex justify-content-between align-items-center bg-white'>
                <span>Used by Devices</span><AiOutlineReload className='reload-icon' size='1.3rem' />
            </div>
            <div className='card-body border'>
                <div className='py-2 py-lg-5'>
                    <DoughnutChart />
                </div>
                <DevicesList />
            </div>
        </div>
    )
}

export default DonutChartWrapper