import React from 'react'
import InfoCardSub from './InfoCardSub'
import './InfoCard.css'

const InfoCard = ({ details }) => {
    return (
        <div className={`card info-card h-100 mx-2`} style={{background: details.background, color: details.color}}>
            <div className='card-body p-2'>
                <div className='d-flex justify-content-between'>
                    <div>
                        <h6 className='info-card-title'>{details.cardTitle}</h6>
                        <h5>{details.cardText}</h5>
                    </div>
                    {details.cardIcon}
                </div>
                {details.subCard && (
                    <InfoCardSub icon={details.cardSubIcon} text={details.cardSubText} line={details.cardLineText} />
                )}
                {details.progressBar && (
                    <div className="progress mt-3" style={{ height: '0.5rem' }}>
                        <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: `${details.progressPercentage}%`}}
                            aria-valuenow={details.progressPercentage}
                            aria-valuemin="0"
                            aria-valuemax="100"
                        />
                    </div>
                )}
            </div>
        </div>
    )
}

export default InfoCard