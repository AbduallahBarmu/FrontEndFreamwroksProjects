import React from 'react'
import { Switch, Route } from "react-router-dom";

// import component pages
import Home from '../components/home/Home';
import Launches from '../components/launchDetails/Launches';
import NotFound from '../components/notFound/NotFound';



const Index = () => {
    return (
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/Launches/:id' component={Launches} />
            <Route component={NotFound} />
        </Switch>
    )
}

export default Index
