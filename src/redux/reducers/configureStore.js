import {applyMiddleware, createStore} from 'redux';
import rootReducers from './index';
import {thunk} from 'redux-thunk';

export default function configureStore() {

    return createStore(rootReducers,applyMiddleware(thunk));
    // createStore(rootReducers,applyMiddleware(thunk)); // redux-thunk middleware kullanarak
}