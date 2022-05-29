import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
const composerEnhance = window.__REDUX_DECVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducers = combineReducers({});
const store = createStore(rootReducers, composerEnhance,(applyMiddleware(thunk)));


export default store