import {
    GET_POST_LIST,
    RECEIVE_POST_LIST,
    SET_POST_LIST,
    ADD_POST,
    TOGGLE_LIKE,
    TOGGLE_BOOKMARK,
    GET_FILTERED_LIST
} from '../actions';
import * as postsApi from '../lib/api/posts';

const store = {
    postList: []
}

const postList = (state=[], action) => {
    console.log(state, action, store)
    switch(action.type) {
        case SET_POST_LIST:
            store.postList = [...action.postList];
            return [...action.postList]
        case GET_POST_LIST:
            postsApi.readPosts();
            return action.postList ? [...action.postList] : [...state]; // @TODO: 비동기 통신하도록 수정해야함
        case GET_FILTERED_LIST:
            return filterPostList([...store.postList], action.filter)
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

function filterPostList(postList, filter) {
    if(filter === 'SHOW_ALL' ) {
      return  postList;
    } else if(filter === 'SHOW_POPULAR') {
      return  postList;
    } else if( filter === 'SHOW_BOOKMARKED') {
      return postList.filter(post => post.isBookmark);
    } else {
      return postList;
    }
  }

export default postList