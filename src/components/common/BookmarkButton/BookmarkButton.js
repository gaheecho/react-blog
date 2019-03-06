// @flow
import React from 'react';
import './BookmarkButton.scss';
import { MdBookmark, MdBookmarkBorder } from 'react-icons/md';
import { connect } from 'react-redux';
import { toggleBookmark } from '../../../actions';

type Props = {
    postId: number;
    isBookmark: boolean;
}

let BookmarkButton = (props: Props) => {
    if(props.isBookmark) {
        return (<span className="clicked" onClick={()=>{props.dispatch(toggleBookmark(props.postId))}}><MdBookmark/></span>)
    } else {
        return (<span className="unclicked" onClick={()=>{props.dispatch(toggleBookmark(props.postId))}}><MdBookmarkBorder/></span>)
    }
}
BookmarkButton = connect()(BookmarkButton)
export default BookmarkButton;