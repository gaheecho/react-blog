import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { Home } from '../pages';
// import Popular from 'pages/Popular';
// import Bookmark from 'pages/Bookmark';

const App = () => (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/:mode(recent|popular|bookmark)" component={Home} />
    </Switch>
)

export default App