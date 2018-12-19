import React,{Component} from 'react';
import { getjwt } from './helper';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class AuthComp extends Component{

    constructor(props){
        super(props);
        this.state={
            user: undefined
        }
    }
    componentDidMount()  {
        console.log('mounting')
        const jwt = getjwt();
        console.log(jwt)
        
        
        axios.get('http://localhost:5002/api/post',{
             headers: { Authorization: `Bearer ${jwt}`} 
            })
        .then(res => this.setState({
            user: res.data.authData.realuser
        }))
        .catch(err => {
            console.log(err)
            console.log('invalid entry')
            //localStorage.removeItem('accessToken');
            this.props.history.push('/');
    })
    
}
    render(){
       console.log(this.state.user)
        if(this.state.user === undefined){
            return <div><h1>Loading....</h1></div>
        }
        return(
            <>
                {this.props.children}
            </>

        )
    }
}
export default withRouter(AuthComp);
