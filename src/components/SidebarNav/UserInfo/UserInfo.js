import React from 'react'
import './UserInfo.css'

function UserInfo() {
    return (
        <div className='user-info-container'>
            <img
                className='img-fliud rounded-circle'
                src='https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png'
                alt='user'
            />
            <h6 className='user-info-name m-0'>Cisco Ramon</h6>
            <p className='text-muted m-0'>Cisco Ramon</p>
        </div>
    )
}

export default UserInfo