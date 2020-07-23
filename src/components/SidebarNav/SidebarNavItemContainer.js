import React from 'react'
import { MdDashboard } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { RiLock2Line } from "react-icons/ri";
import { MdTextFields } from "react-icons/md";
import { MdInsertPhoto } from "react-icons/md";
import { MdAccountBox } from "react-icons/md";
import { AiFillSetting } from "react-icons/ai";
import { IconContext } from "react-icons";
import SidebarNavItem from './SidebarNavItem/SidebarNavItem';

const items = [
    {text: 'Dashboard', icon: <MdDashboard />},
    {text: 'Users', icon: <FaUserFriends />},
    {text: 'Products', icon: <FaShoppingBag />},
    {text: 'Authentication', icon: <RiLock2Line />},
    {text: 'Typography', icon: <MdTextFields />},
    {text: 'Icons', icon: <MdInsertPhoto />},
    {text: 'Account', icon: <MdAccountBox />},
    {text: 'Settings', icon: <AiFillSetting />},
]

function SidebarNavItemContainer() {
    return (
        <IconContext.Provider value={{ size: '1.5rem' }}>
            {items.map(item => <SidebarNavItem text={item.text} icon={item.icon} key={item.text} />)}
        </IconContext.Provider>
    )
}

export default SidebarNavItemContainer
