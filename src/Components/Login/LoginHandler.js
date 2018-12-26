    import React,{ Component} from 'react';
    import LoginPage from './loginPage';
    import { Redirect } from 'react-router-dom';
    import axios from 'axios';
    import Register from './Register'


    class Login extends Component{
        
        constructor(props){
            super(props);
            this.state = {
                isauth : false,
                user: '',
                pass: '',
                toregister: false
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
                this.setState()
            )
            setTimeout(() => {
                window.location.reload()
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
           
            if( localStorage.getItem('accessToken')){
            
                        this.setState({
                            isauth : true
                        })
                        
                    }

              else{
                 // alert('not Authenticated')
              }
        
    
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