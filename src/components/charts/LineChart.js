import React from 'react';
import {Line} from 'react-chartjs-2';

const LineChart = ({chartData, title, height, displayLegend, legendPosition = 'bottom'}) => (
    <Line
        data={chartData}
        height={height}
        options={{
            title:{
                display: !!title,
                text: title,
                fontSize: 25,
            },
            legend:{
                display: displayLegend,
                position: legendPosition
            },
            scales: {
                yAxes: [{
                    ticks: {
                        fontColor: "white",
                        fontSize: 12,
                        beginAtZero: true
                    }
                }],
                xAxes: [
                    {
                        position: 'top',
                        ticks: {
                            fontColor: "white",
                            fontSize: 12,
                            beginAtZero: true
                        }
                    }
                ]
            }
        }}
    />
);

export default LineChart;