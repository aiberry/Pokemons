import { combineReducers } from 'redux';

import list from './list';
import single from './single';
import query from './query';
import movesFilter from './movesFilter';

export default combineReducers({
    list,
    single,
    query,
    movesFilter
});
