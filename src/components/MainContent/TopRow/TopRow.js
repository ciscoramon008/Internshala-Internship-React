import React from 'react'
import { BsArrowDown } from 'react-icons/bs'
import { BsArrowUp } from 'react-icons/bs'
import { GiMoneyStack } from 'react-icons/gi';
import { GiTreeGrowth } from 'react-icons/gi';
import { FaUsers } from 'react-icons/fa';
import { AiFillDollarCircle } from 'react-icons/ai';
import InfoCard from '../InfoCard/InfoCard'

const infoCards = [
    {
        cardTitle: 'BUDGET',
        cardText: '$24,000',
        cardIcon: <div className='rounded-circle p-2 bg-danger'><GiMoneyStack size='2.5rem' color='white' /></div>,
        subCard: true,
        cardSubIcon: <BsArrowDown color='red' size='1.5rem' />,
        cardSubText: '12%',
        cardLineText: 'Just Some Text'
    },
    {
        cardTitle: 'TOTAL USERS',
        cardText: '1,600',
        cardIcon: <div className='rounded-circle p-2 bg-success'><FaUsers size='2.5rem' color='white' /></div>,
        subCard: true,
        cardSubIcon: <BsArrowUp color='green' size='1.5rem' />,
        cardSubText: '18%',
        cardLineText: 'Just Some Text'
    },
    {
        cardTitle: 'TASKS PROGRESS',
        cardText: '75%',
        cardIcon: <div className='rounded-circle p-2 bg-dark'><GiTreeGrowth size='2.5rem' color='white' /></div>,
        subCard: false,
        progressBar: true,
        progressPercentage: 75
    },
    {
        cardTitle: 'TOTAL PROFIT',
        cardText: '$23,200',
        cardIcon: <AiFillDollarCircle size='3.5rem' color='white' />,
        subCard: false,
        background: 'blue',
        color: 'white'
    }
]

function TopRow() {
    return (
        <div className='row no-gutters pt-5'>
            {infoCards.map(card => <div className='col-xl-3 col-md-6 mb-2' key={card.cardTitle}><InfoCard details={card} /></div>)}
        </div>
    )
}

export default TopRow