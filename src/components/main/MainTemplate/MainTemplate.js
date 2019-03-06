// @flow
import React, { type Node } from 'react';

import './MainTemplate.scss';

type Props = {
    children: Node,
    sidebar: Node,
}

const MainTemplate = ({children, sidebar}: Props) => (
    <div className="MainTemplate">
        {sidebar}
        {children}
    </div>
);

export default MainTemplate;