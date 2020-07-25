import React from 'react'
import './UpgradeProItem.css'

function UpgradeProItem() {
    return (
        <div className='upgrade-pro-container'>
            <img 
                className='img-fluid'
                src='https://cdn2.iconfinder.com/data/icons/iconfinder-logo/512/logo-pro-only-black-512.png'
                alt='upgrade-to-pro'
            />
            <h5>Upgrade to PRO</h5>
            <h6 className='px-1'>Upgrade to Devices Kit Pro and get even more components</h6>
            <button className='btn btn-md' style={{background: 'purple', color: 'white'}}>UPGRADE</button>
        </div>
    )
}

export default UpgradeProItem