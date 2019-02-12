import React from 'react';
import {Doughnut} from 'react-chartjs-2';

const DoughnutChart = ({chartData, title, displayLegend, legendPosition = 'bottom'}) => (
    <Doughnut
        data={chartData}
        options={{
            title:{
                display: !!title,
                text: title,
                fontSize: 25
            },
            legend:{
                display: displayLegend,
                position: legendPosition
            }
        }}
    />
);


export default DoughnutChart;