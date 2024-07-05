import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './src/components/homepage';
import Login from './src/components/login';


function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route path="/admin-login" component={Login} />
            </Switch>
        </Router>
    );
}

export default App;