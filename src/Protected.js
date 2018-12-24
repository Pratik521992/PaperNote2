import React,{Component} from 'react';
import { getjwt } from './helper';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class AuthComp extends Component{

    constructor(props){
        super(props);
        this.state={
            user: undefined
        }
    }
    componentWillMount()  {
        console.log('mounting')
        const jwt = getjwt();
        console.log(jwt)
        axios.get('http://localhost:5002/api/post',{
             headers: { Authorization: `Bearer ${jwt}`} 
            })
        .then(res => console.log(res.data))
        .catch(err => {
            
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
