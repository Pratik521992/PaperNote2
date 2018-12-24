import React,{ Component} from 'react';
import LoginPage from './loginPage';
import axios from 'axios';

class Login extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            isauth : false,
            user: '',
            pass: ''
        }
        this.handleauthentication = this.handleauthentication.bind(this);
        this.handlechange = this.handlechange.bind(this);
    }
    
    handleauthentication(e){

      e.preventDefault();
        //axios here
        axios.post('http://localhost:5002/api/login', {
            user: this.state.user,
            pass: this.state.pass
        })
        .then(res => localStorage.setItem('accessToken', res.data.token));
        this.props.history.push('/Protected');
        
        console.log('Logging in ...')
    }
    handlechange(e){
        console.log('entering...');
        this.setState({
            [e.target.id]: e.target.value
        })

    }
    render(){
        return(
            <>
            <LoginPage click={this.handleauthentication} change={this.handlechange} />
            </>
            
        )
    }
}

export default Login;