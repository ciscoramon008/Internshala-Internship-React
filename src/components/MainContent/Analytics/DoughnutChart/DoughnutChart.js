import React from 'react'
import { Doughnut } from 'react-chartjs-2'

function DoughnutChart() {
    const data = {
        labels: ['Desktop', 'Mobile', 'Tab'],
        datasets: [
            {
                label: 'Usage',
                data: [63, 15, 23],
                backgroundColor: [
                    'blue', 'red', 'orange'
                ],
            }
        ]
    }
    
    const options = {
        cutoutPercentage: 80,
        legend: {
            display: false
        },
        maintainAspectRatio: false
    }

    return (
        <div className='doughnut-chart-container'>
            <Doughnut className='analytics-doughnut-chart' data={data} options={options} />
        </div>
    )
}

export default DoughnutChart