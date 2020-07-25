import React from 'react'
import './InfoCard.css'
import InfoCardSub from './InfoCardSub'

const InfoCard = ({ details }) => {
    return (
        <div className={`card info-card h-100 mx-2`} style={{background: details.background, color: details.color}}>
            <div className='card-body p-2'>
                <div className='d-flex justify-content-between'>
                    <div>
                        <h6 className='info-card-title'>{details.cardTitle}</h6>
                        <h5>{details.cardText}</h5>
                    </div>
                    <img
                        className='img-fluid info-card-img'
                        src={details.cardIcon}
                        alt='budget'
                    />
                </div>
                {details.cardSubIcon ? (
                    <InfoCardSub icon={details.cardSubIcon} text={details.cardSubText} line={details.cardLineText} />
                ) : (
                    <h4>Hello</h4>
                )}
            </div>
            
        </div>
    )
}

export default InfoCard