import React, { Component } from 'react';
import LineChart from 'src/components/charts/LineChart';
import PieChart from 'src/components/charts/PieChart';
import BarChart from 'src/components/charts/BarChart';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/pieAction';

class StatisticCmp extends Component {
    constructor(){
        super();
    }

    componentDidMount(){
        this.props.loadData()
    }

    render() {
        return (
            <div>
                <div style={{display: 'flex'}}>
                {
                    !this.props.pie.isFetching && this.props.pie.isLoaded &&
                    (<div style={{width: '50%'}}>
                        <LineChart {...this.props.pie.data} legendPosition="bottom" displayTitle="true" />
                    </div>)
                }
                {
                    !this.props.line.isFetching && this.props.line.isLoaded &&
                    (<div style={{width: '50%'}}>
                        <PieChart {...this.props.line.data} legendPosition="bottom" displayTitle="true"/>
                     </div>)
                }
                </div>
                <div style={{display: 'flex'}}>
                {
                    !this.props.pie.isFetching && this.props.pie.isLoaded &&
                    (<div style={{width: '50%'}}>
                        <BarChart {...this.props.pie.data} legendPosition="bottom" displayTitle="true"/>
                    </div>)
                }
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        pie: state.statistic.pieData,
        line: state.statistic.lineData,
    }
}


const Statistic = connect(mapStateToProps, actionCreators)(StatisticCmp);

export default Statistic;

