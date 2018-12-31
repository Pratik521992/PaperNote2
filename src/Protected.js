import React from 'react';
import { Redirect } from 'react-router-dom';
import App from  './App'
 
export const Protected = () =>  {

    let torender = '';
    if(!localStorage.getItem('accessToken')&&localStorage.getItem('error'))
        {console.log('failure in Protected');localStorage.clear();
        torender =  <Redirect to={{ pathname: "/" }}/>  
        }
    else 
        torender = <App />  
    return (
            <>{torender}</>
    )
}