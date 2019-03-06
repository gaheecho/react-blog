// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiThumbsUp, FiBookmark } from 'react-icons/fi';
import './MainSidebar.scss';

type Props = {
    url: string,
};

class MainSidebar extends Component<Props> {
    render() {
        const { url } = this.props;
        return(
            <aside className="MainSidebar">
                <div className="logo">
                    Blog
                </div>
                <ul className="menu">
                    <li className={url === '/recent' ? 'active' : ''}>
                        <Link to={'/recent'}>
                            <FiHome/>
                            <div className="title">Home</div>
                        </Link>
                    </li>
                    <li className={url === '/popular' ? 'active' : ''}>
                        <Link to={'/popular'}>
                            <FiThumbsUp/>
                            <div className="title">Popular</div>
                        </Link>
                    </li>
                    <li className={url === '/bookmark' ? 'active' : ''}>
                        <Link to={'/bookmark'}>
                            <FiBookmark/>
                            <div className="title">Bookmark</div>
                        </Link>
                    </li>
                </ul>
            </aside>
        )
    }
}

export default MainSidebar;