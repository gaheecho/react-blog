// flow
import React, { Component } from 'react';
import PostCardList from '../../components/common/PostCardList';
import { connect } from 'react-redux';
import { addPost } from '../../actions';
// type Props = {

// }
const mapStateToProps = state => {
    console.log('bookmark post card list mapStateToProps',state);
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
        this.props.setBookmarkFilter()
        this.props.getBookmarkList(this.props.postList);
        console.log(this.props)
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