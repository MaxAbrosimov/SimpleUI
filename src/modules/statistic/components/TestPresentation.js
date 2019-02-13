import React from 'react';
import DoughnutChart from "src/components/charts/DoughnutChart";
import LineChart from "src/components/charts/LineChart";

const TestPresentation = ({chartData, lineData}) => (
    <div style={{display: 'flex'}}>
        {
            (<div style={{width: '50%'}}>
                <DoughnutChart {...chartData}/>
            </div>)
        }
        {
            (<div style={{width: '50%'}}>
                <LineChart {...lineData}/>
            </div>)
        }
    </div>
);

export default TestPresentation;