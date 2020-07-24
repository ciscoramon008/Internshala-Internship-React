import React from 'react'
import { BsArrowDown } from "react-icons/bs"
import './InfoCard.css'

const InfoCard = () => {
    return (
        <div className='card info-card flex-row'>
            <div className='card-body p-3'>
                <h6>BUDGET</h6>
                <h4>$24,000</h4>
                <div className='pt-3'>
                    <h6>
                        <BsArrowDown color='red' size='1.5rem' />12% <span className='ml-2'>Just Some Text</span>
                    </h6>
                </div>
            </div>
            <img
                className='img-fluid'
                src='https://image.flaticon.com/icons/svg/1211/1211547.svg'
                alt='budget'
            />
        </div>
    )
}

export default InfoCard