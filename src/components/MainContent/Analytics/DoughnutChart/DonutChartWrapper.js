import React from 'react'
import { AiOutlineReload } from "react-icons/ai";
import './DonutChartWrapper.css'
import DoughnutChart from './DoughnutChart';
import DevicesList from './DevicesList';

function DonutChartWrapper() {
    return (
        <div className='card donut-chart-wrapper h-100 mx-2'>
            <div className='card-header d-flex justify-content-between align-items-center bg-white'>
                <span>Used by Devices</span><AiOutlineReload className='reload-icon' size='1.3rem' />
            </div>
            <div className='card-body p-0 row no-gutters align-items-md-center align-items-xl-stretch'>
                <div className='col-12 col-md-6 col-xl-12 d-flex align-items-center justify-content-center'>
                    <DoughnutChart />
                </div>
                <div className='col-12 col-md-6 col-xl-12'>
                    <DevicesList />
                </div>
            </div>
        </div>
    )
}

export default DonutChartWrapper