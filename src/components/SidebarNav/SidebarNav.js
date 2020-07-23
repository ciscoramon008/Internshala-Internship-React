import React from 'react'
import './SidebarNav.css'
import SidebarNavItemContainer from './SidebarNavItemContainer'
import UpgradeProItem from './UpgradeProItem'
import UserInfo from './UserInfo'

const SidebarNav = () => {
    return (
        <div className='sidebar-container'>
            <UserInfo />
            <SidebarNavItemContainer />
            <UpgradeProItem />
        </div>
    )
}

export default SidebarNav
