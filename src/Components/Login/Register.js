import React from 'react';
import Button   from '../Dependency/Button';
import TextField from '@material-ui/core/TextField';
import CardBody from '../Dependency/CardBody';
import {  Paper} from '@material-ui/core';
import CardFooter from '../Dependency/CardFooter';

const styles = {
    Paper: {
        padding: 20, margin: 50, minHeight: 500, display: 'block', marginLeft: 'auto', marginRight: 'auto', maxWidth:400
    },
    Button : {textTransform: 'none',
    fontSize: 16,
    flex:{
        basis: 20,
        direction: 'row'
    }}
}

export default props =>{
    return(
        <>
             <Paper style={styles.Paper}>
            <CardBody>
                    <form onSubmit={e => props.click(e)}>
                    <TextField
                            autoFocus
                            margin="dense"
                            
                            id="user"
                            label="Username"
                            type="text"
                            onChange={e => props.change(e)}
                            fullWidth />
                        <TextField margin="dense"
                            id="email"
                            label="Email"
                            placeholder="Enter Email ID"
                            type="email"
                            fullWidth
                            onChange={e=>props.change(e)} />    

                        <TextField margin="dense"
                            id="pass"
                            label="password"
                            type="password"
                            placeholder="enter password"
                            fullWidth
                            onChange={e=>props.change(e)} />
                            <br />
                        <TextField margin="dense"
                            id="passconfirm"
                            label="password"
                            placeholder="confirm password"
                            type="password"
                            fullWidth
                            onChange={e=>props.change(e)} />
                            <br />    
                            <CardFooter>
                            <br />
                        <Button 
                            variant="contained"
                            color="primary"
                            type="submt"
                            style={styles.Button}
                        >Submit</Button>
                        <Button 
                            
                            variant="contained"
                            color="primary"
                            onClick={props.tologin}
                            style={styles.Button}
                        >Back to Login</Button></CardFooter>
                     </form>
                </CardBody>
                </Paper>
        </>
    )
}