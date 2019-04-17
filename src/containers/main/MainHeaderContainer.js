// @flow

import React, { Component } from 'react';
import MainHeader from '../../components/main/MainHeader';
import { withRouter, type Match } from 'react-router-dom';

type Props = {
    match: Match,
  };

class MainHeaderContainer extends Component<Props> {
    render() {
        const { match } = this.props;

        return <MainHeader url={match.url}/>;
    }
}

export default withRouter(MainHeaderContainer);