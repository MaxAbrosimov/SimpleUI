import React, { Component } from 'react';
import LineChart from 'src/components/charts/LineChart';
import PieChart from 'src/components/charts/PieChart';
import DoughnutChart from 'src/components/charts/DoughnutChart';
import BarChart from 'src/components/charts/BarChart';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as pieActions from '../actions/pieAction';
import * as barActions from '../actions/barAction';
import * as lineActions from '../actions/lineAction';

class StatisticCmp extends Component {
    constructor(){
        super();
    }

    componentDidMount(){
        this.props.pieActions.loadData();
        this.props.barActions.loadData();
        this.props.lineActions.loadData();
    }

    render() {
        return (
            <div>
                <div style={{display: 'flex'}}>
                {
                    !this.props.line.isFetching && this.props.line.isLoaded &&
                    (<div style={{width: '50%'}}>
                        <LineChart {...this.props.line.data}/>
                    </div>)
                }
                {
                    !this.props.bar.isFetching && this.props.bar.isLoaded &&
                    (<div style={{width: '50%'}}>
                        <BarChart {...this.props.bar.data}/>
                    </div>)
                }
                </div>
                <div style={{display: 'flex'}}>
                {

                    !this.props.pie.isFetching && this.props.pie.isLoaded &&
                    (<div style={{width: '50%'}}>
                        <PieChart {...this.props.pie.data}/>
                    </div>)
                }
                {

                    !this.props.pie.isFetching && this.props.pie.isLoaded &&
                    (<div style={{width: '50%'}}>
                        <DoughnutChart {...this.props.pie.data}/>
                    </div>)
                }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    pie: state.statistic.pieData,
    line: state.statistic.lineData,
    bar: state.statistic.barData,
});


const mapDispatchToProps = dispatch => ({
    pieActions: bindActionCreators(pieActions, dispatch),
    barActions: bindActionCreators(barActions, dispatch),
    lineActions: bindActionCreators(lineActions, dispatch)
});

const Statistic = connect(mapStateToProps, mapDispatchToProps)(StatisticCmp);

export default Statistic;

