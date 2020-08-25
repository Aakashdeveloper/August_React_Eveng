import { createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise';
import {logger} from 'redux-logger';

import reducers from '../reducers';

let store = createStore(reducers,applyMiddleware(promiseMiddleware,logger));

export default store;

