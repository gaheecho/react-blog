// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookmarkTemplate from '../components/bookmark/BookmarkeTemplate';
import BookmarkPostCardList from '../containers/list/BookmarkPostCardList';
import { getFilteredList, setFilter } from '../actions';
type Props = {};

const mapStateToProps = state => {
  console.log('bookmark mapStateToProps', state);
  return {
    postList: state.postList,
    filter: state.filter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setBookmarkFilter: () => {
        dispatch(setFilter('SHOW_BOOKMARKED'))
      },
      getBookmarkList: () => {
          dispatch(getFilteredList('SHOW_BOOKMARKED'))
      }
  }
}

class Bookmark extends Component<Props> {
  render() {
    return (
      <BookmarkTemplate>
        <BookmarkPostCardList/>
      </BookmarkTemplate>
    );
  }
}

Bookmark = connect(
  mapStateToProps,
  mapDispatchToProps
)(BookmarkPostCardList)
export default Bookmark;