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
      setFilter: (filter) => {
        dispatch(setFilter(filter))
      },
      getFilteredList: (postList, filter) => {
          dispatch(getFilteredList(postList, filter))
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