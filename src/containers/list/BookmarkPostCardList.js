// flow
import React, { Component } from 'react';
import PostCardList from '../../components/common/PostCardList';
import { connect } from 'react-redux';
import { addPost } from '../../actions';
// type Props = {

// }
const mapStateToProps = state => {
    console.log('mapStateToProps',state);
    return {
      postList: state.postList,
      filter: state.filter
    }
  }
  
const mapDispatchToProps = dispatch => {
    return {
        addPost: postItem => {
            dispatch(addPost(postItem))
        }
    }
}

class BookmarkPostCardList extends Component {
    
    componentDidMount() {
        this.props.setFilter('SHOW_BOOKMARKED')
        this.props.getFilteredList(this.props.postList, this.props.filter);
    }
    render() {
        return (
            <div>
                <h2>Bookmark Post</h2>
                <PostCardList postList={this.props.postList}/>            
            </div>
        )
    }
}
BookmarkPostCardList = connect(
    mapStateToProps,
    mapDispatchToProps
  )(BookmarkPostCardList)
export default BookmarkPostCardList;