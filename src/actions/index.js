/*
 * action types
 */
export const GET_POST_LIST = 'GET_POST_LIST';
export const RECEIVE_POST_LIST = 'RECEIVE_POST_LIST';
export const SET_POST_LIST = 'SET_POST_LIST';
export const ADD_POST = 'ADD_POST';
export const TOGGLE_LIKE = 'TOGGLE_LIKE';
export const TOGGLE_BOOKMARK = 'TOGGLE_BOOKMARK';
export const SET_FILTER = 'SET_FILTER';
export const GET_FILTERED_LIST = 'GET_FILTERED_LIST';

export const filters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_POPULAR: 'SHOW_POPULAR',
    SHOW_BOOKMARKED: 'SHOW_BOOKMARKED'
}

/*
 * action creators
 */

export function setPostList(postList) {
    return { type: SET_POST_LIST, postList }
}

export function getPostList() {
    return { type: GET_POST_LIST, isFetching: true }
}

export function receivePostList(res) {
  return { type: RECEIVE_POST_LIST, isFetching: false, postList: res.postList }
}

export function addPost(postItem) {
    return { type: ADD_POST, postItem }
}

export function toggleLike(postId) {
  return { type: TOGGLE_LIKE, postId }
}

export function toggleBookmark(postId) {
  return { type: TOGGLE_BOOKMARK, postId }
}

export function setFilter(filter) {
    return { type: SET_FILTER, filter }
}

export function getFilteredList(postList, filter) {
    return { type: GET_FILTERED_LIST, postList: filterPostList(postList, filter) }
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