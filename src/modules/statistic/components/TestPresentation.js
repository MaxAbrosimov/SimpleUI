import React from 'react';
import DoughnutChart from "src/components/charts/DoughnutChart";
import LineChart from "src/components/charts/LineChart";
import '../styles.css'
import {Dimmer, Loader} from "semantic-ui-react";

const TestPresentation = ({height, chartData, lineData, isFetching}) => (
    <div style={{height: '100%'}}>
        <Dimmer active={isFetching}>
            <Loader active={isFetching}/>
        </Dimmer>
        {!isFetching && (
            <div className="Flex">
                <div className="Total-Doughnut">
                    <DoughnutChart {...chartData} height={height}/>
                </div>
                <div className="Width-Half">
                    <LineChart {...lineData} height={height}/>
                </div>
            </div>
        )}
    </div>
);

export default TestPresentation;