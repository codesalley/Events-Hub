import { combineReducers } from 'redux';
import eventsReducer from './events';
import filterReducer from './filter';

const rootReducer = combineReducers({ events: eventsReducer, filter: filterReducer });

export default rootReducer;
