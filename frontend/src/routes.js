import React from 'react';
import Login from './components/login/login'

import Home from './Layouts/Home'


import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Login}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;