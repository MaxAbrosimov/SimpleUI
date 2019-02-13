import { FETCH_TEST_DATA, TEST_DATA_LOADED } from '../constants/ActionTypes';

const staticTestData = {
    total: {
        success: 29,
        fail: 2,
        skipped: 20
    },
    time: [
        {
            timestamp: 1546300800,
            success: 20,
            fail: 3,
            skipped: 20
        },
        {
            timestamp: 1546387200,
            success: 19,
            fail: 4,
            skipped: 20
        },
        {
            timestamp: 1546473600,
            success: 21,
            fail: 3,
            skipped: 20
        },
        {
            timestamp: 1546560000,
            success: 25,
            fail: 4,
            skipped: 20
        },
        {
            timestamp: 1546646400,
            success: 24,
            fail: 5,
            skipped: 20
        },
        {
            timestamp: 1546732800,
            success: 29,
            fail: 0,
            skipped: 20
        }
    ]
};

export function loadData() {
    return function(dispatch){
        dispatch({ type: FETCH_TEST_DATA });
        return dispatch({ type: TEST_DATA_LOADED, data : staticTestData });
    }
}