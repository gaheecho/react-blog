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
        if(this.props.postList.length === 0) {
            this.props.getPostList();
        }
        this.props.setAllFilter();
        this.props.getAllList();
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