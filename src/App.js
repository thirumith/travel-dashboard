import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/login/Login';
import DashBoard from './components/dashboard/DashBoard';
import Travel from './components/travel/Travel';

class App extends Component {
    state = {}
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route path="/login" component={Login} />
                        <Route path="/dashboard" component={DashBoard} />
                        <Route path="/travel" component={Travel} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;