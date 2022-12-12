import { createStore, combineReducers } from 'redux';
import initialstate from './initialstate';
import postsReducer from './postsRedux';

const subreducers = {
    posts: postsReducer,
};

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialstate,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;