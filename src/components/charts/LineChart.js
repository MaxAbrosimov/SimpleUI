import React from 'react';
import {Line} from 'react-chartjs-2';

const LineChart = ({chartData, displayTitle, location, displayLegend, legendPosition}) => (
    <Line
        data={chartData}
        options={{
            title:{
                display: displayTitle,
                text:'Largest Cities In '+ location,
                fontSize:25
            },
            legend:{
                display: displayLegend,
                position: legendPosition
            }
        }}
    />
);

export default LineChart;