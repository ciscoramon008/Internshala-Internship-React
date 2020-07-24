import React from 'react'
import './SidebarNav.css'
import SidebarNavItemContainer from './SidebarNavItemContainer'
import UpgradeProItem from './UpgradeProItem/UpgradeProItem'
import UserInfo from './UserInfo/UserInfo'

const SidebarNav = () => {
    return (
        <div className='sidebar-container'>
            <UserInfo />
            <hr />
            <SidebarNavItemContainer />
            <UpgradeProItem />
        </div>
    )
}

export default SidebarNav
