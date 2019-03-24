import {
    REQUEST_POSTS,
    RECEIVE_POSTS
} from '../actions/actions';
import { combineReducers } from '../../../Library/Caches/typescript/3.3/node_modules/redux';

function posts(
    state = {
        isFetching: false,
        didInvalidate: false,
        items: []
    }, action
) {
    switch(action.type) {
        case REQUEST_POSTS:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            })
        case RECEIVE_POSTS:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: action.posts,
                lastUpdated: action.receivedAt
            })
        default:
            return state
    }
}

const rootReducer = combineReducers({
    
})