// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiThumbsUp, FiBookmark } from 'react-icons/fi';
import './MainHeader.scss';

type Props = {
    url: string,
};

class MainHeader extends Component<Props> {
    render() {
        const { url } = this.props;
        return(
            <aside className="MainHeader">
                <div className="logo">
                    Blog
                </div>
                <ul className="menu">
                    <li className={url === '/recent' ? 'active' : ''}>
                        <Link to={'/recent'}>
                            <FiHome/>
                        </Link>
                    </li>
                    <li className={url === '/popular' ? 'active' : ''}>
                        <Link to={'/popular'}>
                            <FiThumbsUp/>
                        </Link>
                    </li>
                    <li className={url === '/bookmark' ? 'active' : ''}>
                        <Link to={'/bookmark'}>
                            <FiBookmark/>
                        </Link>
                    </li>
                </ul>
            </aside>
        )
    }
}

export default MainHeader;