import React from 'react'
import './SidebarNavItem.css'

const SidebarNavItem = ({ text, icon }) => {
    return (
        <div className='sidebar-nav-item'>
            <div>{icon} <span className='ml-1 sidebar-nav-item-text'>{text}</span></div>
        </div>
    )
}

export default SidebarNavItem
