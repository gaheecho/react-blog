// @flow
import React from 'react';
import { connect } from 'react-redux';
import './LikeButton.scss';
import { TiHeartOutline, TiHeartFullOutline } from 'react-icons/ti';
import { toggleLike } from '../../../actions';

type Props = {
    postId: number;
    isLiked: boolean;
}

let LikeButton = (props: Props) => {
    if(props.isLiked) {
        return (<span className="clicked" onClick={()=>{props.dispatch(toggleLike(props.postId))}}><TiHeartFullOutline/></span>)
    } else {
        return (<span className="unclicked" onClick={()=>{props.dispatch(toggleLike(props.postId))}}><TiHeartOutline/></span>)
    }
}

LikeButton = connect()(LikeButton)
export default LikeButton;