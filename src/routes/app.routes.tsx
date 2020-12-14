import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from "../pages/Dashboard";


const AppRoutes = () => (
    <Switch>
        <Route path="/" component={Dashboard} />
    </Switch>
);

export default  AppRoutes;