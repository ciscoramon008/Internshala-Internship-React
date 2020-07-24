import React from 'react'
import './InfoCard.css'
import InfoCardSub from './InfoCardSub'

const InfoCard = ({ details }) => {
    return (
        <div className={`card info-card flex-row h-100 mx-2`} style={{background: details.background, color: details.color}}>
            <div className='card-body p-2'>
                <h6>{details.cardTitle}</h6>
                <h5>{details.cardText}</h5>
                {details.cardSubIcon ? (
                    <InfoCardSub icon={details.cardSubIcon} text={details.cardSubText} line={details.cardLineText} />
                ) : (
                    <h4>Hello</h4>
                )}
            </div>
            <img
                className='img-fluid'
                src={details.cardIcon}
                alt='budget'
            />
        </div>
    )
}

export default InfoCard