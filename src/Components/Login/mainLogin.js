import CardHeader from '../Dependency/CardHeader';
import CardBody from '../Dependency/CardBody';
import React from 'react';
import Button from '../Dependency/Button';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';



export default props => {
    return (
        <>
         <CardHeader color="primary" style={{ marginTop: 80 }}>
        <Typography style={{ color: 'inherit' }} variant="headline">Login to Proceed</Typography></CardHeader>
    <br />
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
                id="pass"
                label="password"
                type="password"
                fullWidth
                onChange={e => props.change(e)} />
            <br />

            <br />
            <Button
                variant="contained"
                color="primary"
                type="submt"

                
            >LOGIN</Button>

            <br />
            <br />
            <Typography style={{ color: "inherit" }} variant="subheading" gutterBottom>Not yet Registered ?</Typography>

            <Button
                variant="contained"
                color="primary"
                onClick={props.register}
                
            >Register</Button>

        </form>

    </CardBody>
    </>
    )
}