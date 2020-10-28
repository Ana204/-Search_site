import React from 'react';

import Home from './Layouts/Home'

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Researchs from './Layouts/Researchs';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/Pesquisas" component={Researchs}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;