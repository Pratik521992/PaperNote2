import React from 'react';
import { Redirect } from 'react-router-dom';
import App from  './App'
 
export const Protected = () =>  {

    let torender = '';
    if(!localStorage.getItem('accessToken'))
        {console.log('failure in Protected');
        torender =  <Redirect to={{ pathname: "/" }}/>
        }
    else 
        torender = <App />  
    return (
            <>{torender}</>
    )
}