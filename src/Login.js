import React,{ Component } from 'react';
import { BrowserRouter as Router, Switch} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import App from './App';
import LoginHandler from './Components/Login/LoginHandler';
import AuthComp from './Protected';

class Login extends Component{
    
   
    render(){
        return(
            <Router>
                 <Switch>
                        <Route path="/" exact component={LoginHandler} />
                        <AuthComp>
                            <Route path="/Protected" component={App} />
                        </AuthComp>
                 </Switch>
            </Router>
            
        )
    }
}

export default Login;