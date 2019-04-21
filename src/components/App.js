import React from 'react';
import { Route, Switch } from 'react-router-dom'
// import { Home } from '../pages';
import Recent from '../pages/Recent';
// import Popular from 'pages/Popular';
// import Bookmark from 'pages/Bookmark';

const App = () => (
    <Switch>
        <Route exact path="/" component={Recent}/>
        <Route path="/:mode(recent|popular|bookmark)" component={Recent} />
    </Switch>
)

export default App