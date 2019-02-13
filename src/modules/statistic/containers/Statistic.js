import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Dimmer, Segment, Loader } from 'semantic-ui-react';
import * as testActions from '../actions/testAction';
import TestPresentation from '../components/TestPresentation';

class StatisticCmp extends Component {
    constructor(){
        super();
    }

    componentDidMount(){
        this.props.testActions.loadData();
    }

    render() {
        const {test} = this.props;
        const isLoaded = test.isFetching || !test.isLoaded;
        return (
            <div>
                <Segment style={{height: 400}}>
                    <Dimmer active={isLoaded}>
                        <Loader active={isLoaded}/>
                    </Dimmer>
                    {!isLoaded && (
                        <TestPresentation chartData={test.chartData} lineData={test.lineData} />
                    )}
                </Segment>

            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    test: state.statistic.testData,
});


const mapDispatchToProps = dispatch => ({
    testActions: bindActionCreators(testActions, dispatch)
});

const Statistic = connect(mapStateToProps, mapDispatchToProps)(StatisticCmp);

export default Statistic;

