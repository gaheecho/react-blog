// flow
import React from 'react';
import PostCard from '../../components/common/PostCard';
import LikeButton from '../../components/common/LikeButton';
import BookmarkButton from '../../components/common/BookmarkButton';
type Props = {
}

const PostCardContainer  = (props: Props) => {
    const { postInfo } = props;
    return (
        <PostCard
            key={new Date().getTime()}
            imgSrc={postInfo.imgSrc}
            title={postInfo.title}
            buttons={[<LikeButton key={`${new Date().getTime()}-like`} isLiked={postInfo.isLiked} postId={postInfo.postId}/>, <BookmarkButton key={`${new Date().getTime()}-bookmark`} isBookmark={postInfo.isBookmark} postId={postInfo.postId}/>]}
        /> 
    )
}

export default PostCardContainer;