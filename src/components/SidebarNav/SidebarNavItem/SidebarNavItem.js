import React from 'react'
import './SidebarNavItem.css'

const SidebarNavItem = ({ text, icon }) => {
    return (
        <div className='sidebar-nav-item'>
            <div className='sidebar-icon-container mr-2'>{icon}</div>
            <div className='sidebar-nav-item-text'>{text}</div>
        </div>
    )
}

export default SidebarNavItem
