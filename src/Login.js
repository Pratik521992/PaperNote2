import React,{ Component, Fragment} from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import App from './App';
import LoginPage from './Components/Login/loginPage'

class Login extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            isauth : false
        }
        this.handleauthentication = this.handleauthentication.bind(this);
        this.handlechange = this.handlechange.bind(this);
    }
    
    handleauthentication(){
        this.setState({
            isauth : true
        });
        console.log('Logging in ...')
    }
    handlechange(){
        console.log('entering...')
    }
    render(){
        return(
            <Router>
                <Fragment>
                <Route path="/" 
                render ={() =>(
                    this.state.isauth ? (<App />) : ( <LoginPage change={this.handlechange} click={this.handleauthentication} isauthencated={this.state.auth}/>) 
                )}   
               />
               </Fragment> 
            </Router>
            
        )
    }
}

export default Login;