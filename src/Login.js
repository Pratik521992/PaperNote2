import React from 'react';
import { BrowserRouter as Router, Switch} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import {Protected} from './Protected';
import LoginHandler from './Components/Login/LoginHandler';
import Register from '../src/Components/Login/Register';

function Login() {
    return(
            <Router>
                <Switch>
                     <Route path="/" exact component={LoginHandler} />
                      <Route path="/Protected" component={Protected} />
                      <Route path="/Register" component={ Register } />
                     
                </Switch>
            </Router>
            )
        }


export default Login;