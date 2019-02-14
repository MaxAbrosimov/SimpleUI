import { convertTimestampToDate } from 'src/utils/timeUtils';
import {FETCH_TEST_DATA, TEST_DATA_LOADED} from '../constants/ActionTypes';


const initialState = {
    isFetching: false,
    isLoaded: false
};

const convertLineData = data => {
    const success = [];
    const fail = [];
    const labels = [];
    data.forEach(t => {
        success.push(t.success);
        fail.push(t.fail);
        labels.push(convertTimestampToDate(t.timestamp));
    });
    return {
        chartData: {
            labels,
            datasets: [
                {
                    data: fail,
                    backgroundColor: 'rgba(255,99,99, 0.1)',
                    borderColor: "rgba(255,99,99)",
                },
                {
                    data: success,
                    backgroundColor: 'rgba(129,213,125, 0.1)',
                    borderColor: "rgba(129,213,125)",
                }
            ]
        },
    };
};

const convertChartData = data => ({
    chartData: {
        labels: ['success', 'fail', 'skipped'],
        datasets: [
            {
                data: [ data.success, data.fail, data.skipped],
                backgroundColor: ['#81D57D', '#FF6363', '#46434A'],
                hoverBackgroundColor: ['#81D57D', '#FF6363', '#46434A']
            }
        ]
    }
});

export default function pieReducer(state = initialState, action) {
    switch(action.type) {

        case FETCH_TEST_DATA:
            return {
                ...initialState,
                isFetching: true
            };

        case TEST_DATA_LOADED:
            return {
                ...state,
                lineData: convertLineData(action.data.time),
                chartData: convertChartData(action.data.total),
                isFetching: false,
                isLoaded: true
            };

        default:
            return state
    }
}