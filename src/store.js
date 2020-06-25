import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { handleEventReducer } from './reducers/Newevent-reducer';

const store = createStore(handleEventReducer, applyMiddleware(thunk));

export default store;