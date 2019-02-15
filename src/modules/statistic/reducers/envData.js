import {
    FETCH_ENV_DATA,
    FETCH_ENV_TEST_DATA,
    ENV_DATA_LOADED,
    ENV_TEST_DATA_LOADED
} from "../constants/ActionTypes";
import { convertChartData, convertLineData } from './common';

const initialState = {
    isFetching: false,
    isLoaded: false,
    environment: []
};

export default function envReducer(state = initialState, action) {
    switch(action.type) {

        case FETCH_ENV_DATA:
            return {
                ...initialState,
                isFetching: true
            };

        case ENV_DATA_LOADED:
            return {
                ...state,
                environment: action.environment,
                isFetching: false,
                isLoaded: true
            };

        case FETCH_ENV_TEST_DATA:
            return {
                ...state,
                environment: state.environment.map(env => {
                    if (env.envId === action.envId) {
                        return {
                            ...env,
                            isFetching: true
                        }
                    } else {
                        return env;
                    }
                })
            };

        case ENV_TEST_DATA_LOADED:
            return {
                ...state,
                environment: state.environment.map(env => {
                    if (env.envId === action.environmentData.envId) {
                        return {
                            ...env,
                            isFetching: false,
                            lineData: convertLineData(action.environmentData.time),
                            chartData: convertChartData(action.environmentData.total),
                        }
                    }
                    return env;
                })
            };

        default:
            return state
    }
}