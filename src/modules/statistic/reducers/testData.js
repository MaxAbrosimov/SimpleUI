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
        title: 'Population In Massachusetts at 1919 and 2019',
        chartData: {
            labels,
            datasets: [
                {
                    data: fail,
                    backgroundColor: '#FF6363'
                },
                {
                    data: success,
                    backgroundColor: '#81D57D'
                }
            ]
        },
    };
};

const convertChartData = data => ({
    title: 'Population In Massachusetts at 1919 and 2019',
    chartData: {
        labels: ['fail', 'success', 'skipped'],
        datasets: [
            {
                data: [data.fail, data.success, data.skipped],
                backgroundColor: ['#FF6363', '#81D57D']
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