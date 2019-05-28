// flow
import React, { Component } from 'react';
import PostCardList from '../../components/common/PostCardList';
import { connect } from 'react-redux';
import { addPost } from '../../actions';
// type Props = {

// }
const mapStateToProps = state => {
    console.log('recent post card list mapStateToProps',state);
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

class RecentPostCardList extends Component {
    
    componentDidMount() {
        this.props.getPostList();
        this.props.setFilter('SHOW_All')
        this.props.getFilteredList(this.props.postList, this.props.filter);
        // this.props.getPostList();
    }
    render() {
        return (
            <div>
                <h2>Recent Post</h2>
                <PostCardList postList={this.props.postList}/>            
            </div>
        )
    }
}
RecentPostCardList = connect(
    mapStateToProps,
    mapDispatchToProps
  )(RecentPostCardList)
export default RecentPostCardList;