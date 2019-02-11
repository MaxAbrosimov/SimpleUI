import React from 'react';
import {Bar} from 'react-chartjs-2';

const BarChart = ({chartData, displayTitle, location, displayLegend, legendPosition}) => (
    <Bar
        data={chartData}
        options={{
            title:{
                display: displayTitle,
                text: 'Largest Cities In '+ location,
                fontSize: 25
            },
            legend:{
                display: displayLegend,
                position: legendPosition
            }
        }}
    />
)

export default BarChart;