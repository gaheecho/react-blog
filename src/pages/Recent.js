// @flow
import React from 'react';
import { connect } from 'react-redux';
import { addPost, setPostList, getPostList } from '../actions';
import RecentTemplate from '../components/recent/RecentTemplate/RecentTemplate';
import RecentPostCardList from '../containers/list/RecentPostCardList';
// type Props = {};

const mapStateToProps = state => {
    console.log('mapStateToProps',state);
    return {
      postList: state.postList
    }
  }
  
const mapDispatchToProps = dispatch => {
    return {
        addPost: postItem => {
            dispatch(addPost(postItem))
        },
        setPostList: postList => {
            dispatch(setPostList(postList))
        },
        getPostList: () => {
            dispatch(getPostList())
        }
    }
}

let Recent = (props) => {
    return (
        <RecentTemplate>
            <RecentPostCardList/>
        </RecentTemplate>
    )
}

Recent = connect(
    mapStateToProps,
    mapDispatchToProps
  )(RecentPostCardList)
export default Recent;