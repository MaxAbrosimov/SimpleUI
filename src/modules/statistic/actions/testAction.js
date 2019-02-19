import {post, get} from 'axios';
import { FETCH_ENV_DATA,
    FETCH_TEST_DATA,
    FETCH_ENV_TEST_DATA,
    ENV_DATA_LOADED,
    TEST_DATA_LOADED,
    ENV_TEST_DATA_LOADED,
    ERROR_FETCH_TEST_DATA
} from '../constants/ActionTypes';

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

const staticEnvData = [
    {
        envId: 1,
        name: 'Test env 1'
    },
    {
        envId: 2,
        name: 'Test env 2'
    }
];

const staticEnvTestData = [
    {
        envId: 1,
        total: {
            totalTestsCount: 25,
            successfullTestsCount: 14,
            failedTestsCount: 1,
            skippedTestsCount: 10
        },
        time: [
            {
                timestamp: 1546300800,
                success: 9,
                fail: 3,
                skipped: 10
            },
            {
                timestamp: 1546387200,
                success: 10,
                fail: 2,
                skipped: 10
            },
            {
                timestamp: 1546473600,
                success: 10,
                fail: 2,
                skipped: 10
            },
            {
                timestamp: 1546560000,
                success: 12,
                fail: 2,
                skipped: 10
            },
            {
                timestamp: 1546646400,
                success: 14,
                fail: 0,
                skipped: 10
            },
            {
                timestamp: 1546732800,
                success: 14,
                fail: 0,
                skipped: 10
            }
        ]
    },
    {
        envId: 2,
        total: {
            totalTestsCount: 30,
            successfullTestsCount: 27,
            failedTestsCount: 0,
            skippedTestsCount: 3
        },
        time: [
            {
                timestamp: 1546300800,
                success: 20,
                fail: 5,
                skipped: 5
            },
            {
                timestamp: 1546387200,
                success: 21,
                fail: 4,
                skipped: 5
            },
            {
                timestamp: 1546473600,
                success: 22,
                fail: 3,
                skipped: 5
            },
            {
                timestamp: 1546560000,
                success: 25,
                fail: 0,
                skipped: 5
            },
            {
                timestamp: 1546646400,
                success: 25,
                fail: 0,
                skipped: 5
            },
            {
                timestamp: 1546732800,
                success: 27,
                fail: 0,
                skipped: 3
            }
        ]
    }
];

export function loadEnvironmentTestData(envId) {
    return function(dispatch){
        dispatch({ type: FETCH_ENV_TEST_DATA, envId });
        return dispatch({ type: ENV_TEST_DATA_LOADED, environmentData : staticEnvTestData.find(data => data.envId === envId) });
    }
}


export function loadEnvironment() {
    return function(dispatch){
        dispatch({ type: FETCH_ENV_DATA });
        return dispatch({ type: ENV_DATA_LOADED, environment : staticEnvData });
    }
}


export function loadData() {
    return function(dispatch){
        dispatch({ type: FETCH_TEST_DATA });
        return get('/statistics/')
            .then(function(response){
                dispatch({ type: TEST_DATA_LOADED, data : response.data })
            })
            .catch(function(){
                dispatch({ type: ERROR_FETCH_TEST_DATA })
            })
    }
}