import React from 'react'
import { Bar } from 'react-chartjs-2'

function BarChart() {
    const data = {
        labels: ['19 July', '20 July', '21 July', '22 July', '23 July', '24 July'],
        datasets: [
            {
                label: 'Sales',
                data: [17, 4, 18, 27, 28, 17],
                backgroundColor: 'blue',
                barThickness: 10,
                // barPercentage: 0.6,
                // categoryPercentage: 0.2
            },
            {
                label: 'Sales',
                data: [12, 20, 11, 28, 29, 25],
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
                gridLines: {
                    drawBorder: false,
                },
                ticks: {
                    min: 0,
                    max: 30,
                    stepSize: 5,
                },
            }],
            xAxes: [{
                gridLines: {
                    display: false,
                }
            }]
        }
    }

    return <Bar data={data} options={options} />
}

export default BarChart