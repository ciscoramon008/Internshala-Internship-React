import React from 'react'


function DeviceUsed({ icon, device, usage }) {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center mx-2'>
            {icon}
            <h6 className='mt-1 mb-0'>{device}</h6>
            <h4>{usage}</h4>
        </div>
    )
}

export default DeviceUsed