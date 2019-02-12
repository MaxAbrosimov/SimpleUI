import React from 'react';
import {Bar} from 'react-chartjs-2';

const BarChart = ({chartData, title, displayLegend, legendPosition = 'bottom'}) => (
    <Bar
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

export default BarChart;