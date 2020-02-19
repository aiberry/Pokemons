import { combineReducers } from 'redux';

import list from './list';
import single from './single';
import query from './query';
import movesFilter from './movesFilter';
import previousList from './previousList';
import nextList from './nextList';

export default combineReducers({
    list,
    single,
    query,
    movesFilter,
    previousList,
    nextList
});
