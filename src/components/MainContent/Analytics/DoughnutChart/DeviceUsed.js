import React from 'react'
import { GoDeviceDesktop } from "react-icons/go";


function DeviceUsed() {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center mx-2'>
            <GoDeviceDesktop size='1.5rem' />
            <h6 className='mt-1 mb-0'>Desktop</h6>
            <h4>63%</h4>
        </div>
    )
}

export default DeviceUsed