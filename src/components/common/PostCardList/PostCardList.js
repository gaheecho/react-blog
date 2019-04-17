// @flow
import React from 'react';
import './PostCardList.scss';
import PostCardContainer from '../../../containers/item/PostCardContainer';
type Props = {

}

const PostCardList = (props: Props) => {
    console.log('PostCardList', props)
    
    return (
    <div id="PostCardList">
        <div className="post-card-list">
        {
            props.postList.map((postItem, index) => {
                return <PostCardContainer key={`${postItem.title}-${index}`} postInfo={postItem}/>
            })
        }
        </div>
    </div>
        )
}

export default PostCardList;