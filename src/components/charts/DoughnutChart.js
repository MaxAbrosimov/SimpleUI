import React from 'react';
import {Doughnut} from 'react-chartjs-2';

const DoughnutChart = ({chartData, height, title, displayLegend, legendPosition = 'bottom'}) => (
    <Doughnut
        data={chartData}
        height={height}
        options={{
            title:{
                display: !!title,
                text: title,
                fontSize: 25
            },
            cutoutPercentage: 80,
            legend:{
                display: displayLegend,
                position: legendPosition
            }
        }}
    />
);


export default DoughnutChart;