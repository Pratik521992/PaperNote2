    import React,{ Component} from 'react';
    import LoginPage from './loginPage';
    import { Redirect } from 'react-router-dom';
    import axios from 'axios';
    import Register from './Register';
    import SnackbarContent from '@material-ui/core/SnackbarContent';


    class Login extends Component{
        
        constructor(props){
            super(props);
            this.state = {
                isauth : false,
                user: '',
                pass: '',
                toregister: false,
                showerror: ''
            }
            this.handleauthentication = this.handleauthentication.bind(this);
        }
        
       handleauthentication(e){

        e.preventDefault();
            //axios here
            axios.post('http://localhost:5000/api/login', {
             
                user: this.state.user,
                pass: this.state.pass},
            )
            .then(res => 
                localStorage.setItem('accessToken', res.data.token),
                this.setState({})
            
            )
            setTimeout(() => {
                    window.location.reload();
                }, 1000);
            
            
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
          
              
             if(localStorage.getItem('accessToken')==='not authenticated'){

                this.setState({
                    isauth: 'wrong'
                })
              }
              
              
           else if( localStorage.getItem('accessToken')){
            
            this.setState({
                isauth : true
            })
  } 
    
        }
        render(){
            let showerror = ''
            if(this.state.isauth==='wrong')
                showerror = <SnackbarContent variant="error"  message="This is an error message!"/>;
            return(
            <>
                { this.state.isauth ? <Redirect to={{pathname: '/Protected' }}  /> : (
                <LoginPage click={this.handleauthentication} change={this.handlechange} register={this.HandleRegister} />
                )}
               { this.state.toregister? <Register tologin={this.handleback} /> : <Redirect to={{pathname:'/'}} />
                }
              {showerror}
                </>
            )
    }
    }

    export default Login;