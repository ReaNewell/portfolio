import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../components/HomePage';
import ListList from '../projects/listlist/ListList';

const AppRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/' component={HomePage} exact={true} />
            <Route path='/listlist' component={ListList} exact={true} />
        </Switch>
    </BrowserRouter>
);

export default AppRouter;