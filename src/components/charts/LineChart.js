import React from 'react';
import {Line} from 'react-chartjs-2';

const LineChart = ({chartData, title, displayLegend, legendPosition = 'bottom'}) => (
    <Line
        data={chartData}
        options={{
            title:{
                display: !!title,
                text: title,
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