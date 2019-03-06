// @flow
import React from 'react';
import './PostCard.scss';

type Props = {
    imgSrc: string;
    title: string;
}

const PostCard = (props: Props) => {
    return (
        <div className="PostCard">
        {/* <div className="image">
            <img src={props.imgSrc} alt={props.title}></img>
        </div> */}
        <a className="card-image" href="bookmark">
            <div className="image" style={{'backgroundImage':`url(${props.imgSrc})`}}></div>
        </a>
        <div className="title">
            {props.title}
        </div>
        <div className="buttons">
            {props.buttons}
        </div>
        
        </div>
    )
}

export default PostCard;