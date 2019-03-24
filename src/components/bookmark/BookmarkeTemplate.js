// @flow
import React, { type Node } from 'react';

import './BookmarkTemplate.scss';

type Props = {
    children: Node
}

const BookmarkTemplate = ({children}: Props) => (
    <div className="BookmarkTemplate">{children}</div>
);

export default BookmarkTemplate;