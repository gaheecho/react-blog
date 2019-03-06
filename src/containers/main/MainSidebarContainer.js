// @flow

import React, { Component } from 'react';
import MainSidebar from '../../components/main/MainSidebar';//'components/main/MainSidebar/MainSidebar';
import { withRouter, type Match } from 'react-router-dom';

type Props = {
    match: Match,
  };

class MainSidebarContainer extends Component<Props> {
    render() {
        console.log('MainSidebarContainer', this.props)
        const { match } = this.props;

        return <MainSidebar url={match.url}/>;
    }
}

export default withRouter(MainSidebarContainer);