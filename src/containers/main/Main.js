// @flow
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import MainTemplate from '../../components/main/MainTemplate';//'components/main/MainTemplate';
import MainSidebarContainer from '../../containers/main/MainSidebarContainer';//'containers/main/MainSidebarContainer';
import MainHeaderContainer from '../../containers/main/MainHeaderContainer';
import Popular from '../../pages/Popular';
import Bookmark from '../../pages/Bookmark';
import Recent from '../../pages/Recent';

type Props = {
    landing: boolean,
  }

  

class MainContainer extends Component<Props> {

    
    render() {
        return (
            <MainTemplate sidebar={<MainSidebarContainer/>}>
                <MainHeaderContainer/>
                <Switch>
                    <Route path="/recent" component={Recent}/>
                    <Route path="/popular" component={Popular}/>
                    <Route path="/bookmark" component={Bookmark}/>
                </Switch>
            </MainTemplate>
        )
    }
}

export default MainContainer;
