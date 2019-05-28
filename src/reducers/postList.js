import {
    GET_POST_LIST,
    RECEIVE_POST_LIST,
    SET_POST_LIST,
    ADD_POST,
    TOGGLE_LIKE,
    TOGGLE_BOOKMARK,
    GET_FILTERED_LIST
} from '../actions';
import * as postsApi from '../lib/api/posts'
// const initialState = {
//    postList: []
// };

const postList = (state=[], action) => {
    console.log(state, action)
    switch(action.type) {
        case SET_POST_LIST:
            return [...action.postList]
        case GET_POST_LIST:
            postsApi.readPosts();
            console.log('********************** :: GET_POST_LIST', state, action)
            return action.postList ? [...action.postList] : [...state]; // @TODO: 비동기 통신하도록 수정해야함
        case GET_FILTERED_LIST:
            return [...action.postList]
        case RECEIVE_POST_LIST:
            return action;
        case ADD_POST:
        return [
            ...state,
            action.postItem
          ]
        case TOGGLE_LIKE:
            return state.map(postItem => {
                if(postItem.postId === action.postId) {
                    return {...postItem, isLiked: !postItem.isLiked}
                }
                return postItem;
            })
        case TOGGLE_BOOKMARK:
            return state.map(postItem => {
                if(postItem.postId === action.postId) {
                    return {...postItem, isBookmark: !postItem.isBookmark}
                }
                return postItem;
            })
        default:
            return state;
    }
}

export default postList