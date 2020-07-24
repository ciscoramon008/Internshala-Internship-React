import React from 'react'
import { BsArrowDown } from 'react-icons/bs'
import { BsArrowUp } from 'react-icons/bs'
import InfoCard from '../InfoCard/InfoCard'

const infoCards = [
    {
        cardTitle: 'BUDGET',
        cardText: '$24,000',
        cardIcon: 'https://image.flaticon.com/icons/svg/1211/1211547.svg',
        cardSubIcon: <BsArrowDown color='red' size='1.5rem' />,
        cardSubText: '12%',
        cardLineText: 'Just Some Text'
    },
    {
        cardTitle: 'TOTAL USERS',
        cardText: '1,600',
        cardIcon: 'https://image.flaticon.com/icons/svg/615/615075.svg',
        cardSubIcon: <BsArrowUp color='green' size='1.5rem' />,
        cardSubText: '18%',
        cardLineText: 'Just Some Text'
    },
    {
        cardTitle: 'TASKS PROGRESS',
        cardText: '75%',
        cardIcon: 'https://image.flaticon.com/icons/svg/3094/3094918.svg',
    },
    {
        cardTitle: 'TOTAL PROFIT',
        cardText: '$23,200',
        cardIcon: 'https://image.flaticon.com/icons/svg/985/985698.svg',
        background: 'purple',
        color: 'white'
    }
]

function TopRow() {
    return (
        <div className='row no-gutters pt-5'>
            {infoCards.map(card => <div className='col-md-3'><InfoCard details={card}/></div>)}
        </div>
    )
}

export default TopRow