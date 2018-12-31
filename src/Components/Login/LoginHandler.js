    import React,{ Component} from 'react';
    import LoginPage from './loginPage';
    import { Redirect } from 'react-router-dom';
    import axios from 'axios';
    import Register from './Register';
 
  
   

    class Login extends Component{
        
        constructor(props){
            super(props);
            this.state = {
                isauth : false,
                user: '',
                pass: '',
                toregister: false,
                showerror: '',
                open:false
            }
           
        }
        
       handleauthentication=(e)=>{

        e.preventDefault();
            //axios here
            axios.post('http://localhost:5000/api/login', {
             
                user: this.state.user,
                pass: this.state.pass},
            )
             .then(res => ( (res.data.token===undefined)? localStorage.setItem('error', res.data.error):
                            localStorage.setItem('accessToken', res.data.token)
                             
             ))
            setTimeout(() => {
                window.location.reload()
            }, 500);
            
        }
        handlechange=(e)=>{
            console.log('entering...');
            this.setState({
                [e.target.id]: e.target.value
            })

        }
        HandleRegister=()=>{
            this.setState({
                toregister: true
            })
        }
        handleback=(e)=>{
            console.log('handling')
            this.setState({
                toregister: false
            })
        }
        componentDidMount(){
            console.log('before login');
            if(localStorage.getItem('accessToken'))this.setState({isauth: true,open:false});
        }
        handleclose=()=>{
            this.setState({
                open:false
            })
        }

        render(){
           
            return(
            <>  
            
            
                { (this.state.isauth )? <Redirect to={{pathname: '/Protected' }}  /> : 

                (!this.state.toregister)?    
                <LoginPage click={this.handleauthentication} change={this.handlechange} register={this.HandleRegister} />
                :
                <Register tologin={this.handleback} />
                }
            </>
            )
    }
    }

    export default Login;