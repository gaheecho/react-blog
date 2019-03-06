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
      postList: state.postList
    }
  }
  
const mapDispatchToProps = dispatch => {
    return {
        addPost: postItem => {
            dispatch(addPost(postItem))
        }
    }
}

const postInfoList = [
    {
        postId: 1,
        title: "Jessica Jones with remarkable abilities in New York City." ,
        imgSrc:"https://mblogthumb-phinf.pstatic.net/20160414_22/shgusgnl66_14606201040627JSqU_JPEG/Marvels.Jessica.Jones.S01E05.AKA.The.Sandwich.Saved.Me.720p.NF.WEBRip.DD5.1.x264.JPG?type=w2",
        isLiked: true,
        isBookmark: false
    }, {
        postId: 2,
        title: "Stranger Things season 3 is comming this summer.",
        imgSrc:"https://i.pinimg.com/originals/f9/60/a0/f960a0b17088c116e2b154de877b94c7.gif",
        isLiked: true,
        isBookmark: true
    }, {
        postId: 3,
        title: "You can find out Silver Lining.",
        imgSrc:"https://i-h1.pinimg.com/564x/ef/cc/ab/efccab1f0c3192f98be0b6000b1e94e7.jpg",
        isLiked: true,
        isBookmark: true
    }, {
        postId: 4,
        title: "Call me by your name",
        imgSrc:"https://i-h1.pinimg.com/564x/a5/ae/12/a5ae12f19bd35ef6d16bbfb3c26b5bea.jpg",
        isLiked: false,
        isBookmark: true
    }, {
        postId: 5,
        title: "Love or Death",
        imgSrc:"https://i-h1.pinimg.com/564x/2b/e3/a4/2be3a481ee89631eb17b136ed2e122d0.jpg",
        isLiked: true,
        isBookmark: false
    }, {
        postId: 6,
        title: "Who is Blue??!",
        imgSrc:"https://i-h1.pinimg.com/564x/1e/59/ab/1e59ab634dab7cea100b8b1e36ba79d7.jpg",
        isLiked: true,
        isBookmark: true
    }
]

class RecentPostCardList extends Component {
    
    componentDidMount() {
        console.log('componentDidMount')
        console.log(this.props);
        this.props.setPostList(postInfoList);
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