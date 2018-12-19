import React,{ Component, Fragment} from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import App from './App';
import LoginPage from './Components/Login/loginPage';
import axios from 'axios';

class Login extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            isauth: false,
            user: '',
            pass: ''
        }
       
    }
    
    handleauthentication = (e) => {

        e.preventDefault();
        //axios post here
        axios.post('http://localhost:5004/api/db/login',{
            user: this.state.user,
            pass: this.state.pass
        })
        .then(res => localStorage.setItem('accessToken', res.data.token));
        this.setState({
            isauth : true
        });
        console.log('Logging in ...')
    }
    handlechange = (e) => {
        console.log('entering...');
        this.setState({ [e.target.id]: e.target.value });
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