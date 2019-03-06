import {
    GET_POST_LIST,
    SET_POST_LIST,
    ADD_POST,
    TOGGLE_LIKE,
    TOGGLE_BOOKMARK
} from '../actions';

// const initialState = {
//    postList: []
// };

const postList = (state=[], action) => {
    console.log(state, action)
    switch(action.type) {
        case SET_POST_LIST:
            return [...action.postList]
        case GET_POST_LIST:
            return state;
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