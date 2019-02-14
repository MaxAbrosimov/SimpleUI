import React from 'react';
import DoughnutChart from "src/components/charts/DoughnutChart";
import LineChart from "src/components/charts/LineChart";
import '../styles.css'

const TestPresentation = ({chartData, lineData}) => (
    <div className="Flex">
        {
            (<div className="Test-Presentation">
                <DoughnutChart {...chartData} />
            </div>)
        }
        {
            (<div className="Width-Half">
                <LineChart {...lineData} height={100}/>
            </div>)
        }
    </div>
);

export default TestPresentation;