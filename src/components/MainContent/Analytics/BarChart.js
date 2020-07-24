import React from 'react'
import { Bar } from 'react-chartjs-2'

function BarChart() {
    const data = {
        labels: ['Jan', 'Feb', 'March', 'April', 'May'],
        datasets: [
            {
                label: 'Sales for 2020 (M)',
                data: [3, 2, 2, 1, 5],
                backgroundColor: 'blue',
                barThickness: 10,
                // barPercentage: 0.6,
                // categoryPercentage: 0.2
            },
            {
                label: 'Sales for 2019 (M)',
                data: [2, 3, 1, 5, 4],
                backgroundColor: 'lightgray',
                barThickness: 10,
                // barPercentage: 0.6,
                // categoryPercentage: 0.2
            }
        ]
    }
    
    const options = {
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    min: 0,
                    max: 6,
                    stepSize: 1,
                }
            }],
        }
    }

    return (
        <Bar data={data} options={options} />
    )
}

export default BarChart