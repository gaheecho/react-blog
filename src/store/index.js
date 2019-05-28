import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from '../reducers';
import postsApi from '../lib/api/posts'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(postsApi)

// const action = type => store.dispatch({type})

export default store;