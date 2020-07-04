import thunkMiddleware from 'redux-thunk';
import testReducer from '../store/reducers/testReducer';
import taskReducer from '../store/reducers/taskReducer';

import loggerMiddleware from 'redux-logger';
import { createStore, applyMiddleware, combineReducers } from 'redux';


const middlewares = applyMiddleware(thunkMiddleware, loggerMiddleware);

const rootReducer = combineReducers({
taskReducer,
testReducer
});

export const store = createStore(rootReducer, middlewares);