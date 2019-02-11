import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import * as statistic from 'src/modules/statistic/reducers';

export default combineReducers({
  routing: routerReducer,
  statistic: combineReducers(statistic),
  fake: () => []
});
