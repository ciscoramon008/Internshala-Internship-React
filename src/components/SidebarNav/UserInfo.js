import React from 'react'
import './UserInfo.css'

function UserInfo() {
    return (
        <div className='user-info-container'>
            <img
                className='img-fliud rounded-circle'
                style={{width: '5rem'}}
                src='https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png'
                alt='user'
            />
            <h5>Cisco Ramon</h5>
            <h6 className='text-muted'>Cisco Ramon</h6>
        </div>
    )
}

export default UserInfo