import React from 'react'

function InfoCardSub({ icon, text, line }) {
    return (
        <div className='pt-2'>
            <h6 className='info-card-title'>
                {icon}{text} <span className='ml-2'>{line}</span>
            </h6>
        </div>
    )
}

export default InfoCardSub