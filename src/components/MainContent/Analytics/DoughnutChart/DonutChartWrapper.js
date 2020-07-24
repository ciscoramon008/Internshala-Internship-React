import React from 'react'
import { AiOutlineReload } from "react-icons/ai";
import './DonutChartWrapper.css'
import DoughnutChart from './DoughnutChart';
import DeviceUsed from './DeviceUsed';

function DonutChartWrapper() {
    return (
        <div className='card donut-chart-wrapper mx-2'>
            <div className='card-header d-flex justify-content-between align-items-center'>
                <span>Used by Devices</span><AiOutlineReload className='reload-icon' size='1.3rem' />
            </div>
            <div className='card-body'>
                <div className='py-3'>
                    <DoughnutChart />
                </div>
                <div className='mt-4 d-flex justify-content-center'>
                    <DeviceUsed />
                    <DeviceUsed />
                    <DeviceUsed />
                </div>
            </div>
        </div>
    )
}

export default DonutChartWrapper