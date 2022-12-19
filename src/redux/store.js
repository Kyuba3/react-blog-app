import { createStore, combineReducers } from 'redux';
import categoriesRedux from './categoriesRedux';
import initialstate from './initialstate';
import postsReducer from './postsRedux';

const subreducers = {
    posts: postsReducer,
    categories: categoriesRedux
};

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialstate,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;