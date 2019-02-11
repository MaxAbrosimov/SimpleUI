import React from 'react';
import {Pie} from 'react-chartjs-2';

const PieChart = ({chartData, displayTitle, location, displayLegend, legendPosition}) => (
    <Pie
        data={chartData}
        options={{
            title:{
                display: displayTitle,
                text: 'Largest Cities In '+location,
                fontSize: 25
            },
            legend:{
                display: displayLegend,
                position: legendPosition
            }
        }}
    />
);


export default PieChart;