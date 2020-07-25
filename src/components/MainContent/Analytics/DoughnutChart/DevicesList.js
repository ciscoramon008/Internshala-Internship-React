import React from 'react'
import { GoDeviceDesktop } from "react-icons/go";
import { IoMdTabletPortrait } from "react-icons/io";
import { GoDeviceMobile } from "react-icons/go";
import DeviceUsed from './DeviceUsed';

function DevicesList() {
    return (
        <div className='mt-2 mt-lg-4 d-flex justify-content-center'>
            <DeviceUsed icon={<GoDeviceDesktop size='1.5rem' />} device='Desktop' usage='63%' />
            <DeviceUsed icon={<IoMdTabletPortrait size='1.5rem' />} device='Tablet' usage='15%' />
            <DeviceUsed icon={<GoDeviceMobile size='1.5rem' />} device='Mobile' usage='23%' />
        </div>
    )
}

export default DevicesList
