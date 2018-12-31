import React from 'react';
import Button from '../Dependency/Button';
import TextField from '@material-ui/core/TextField';
import { Grid, Paper ,Typography } from '@material-ui/core';
import CardHeader from '../Dependency/CardHeader';
import CardBody from '../Dependency/CardBody';
import image from '../../images/background.jpg';
import SnackbarContent from '@material-ui/core/SnackbarContent';

const styles = {
    paperContainer: {
        backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        height: "900px"
    },
    error:{
            backgroundColor: '#FF3D00',
            fontSize:16
        
    },
    Paper: {
        padding: 20, margin: 50, minHeight: 500, display: 'block', marginLeft: 'auto', marginRight: 'auto', Width: 400
    },
    desc: {
        padding: 20, margin: 20,  color: '#FAFAFA'
    },
    Button: {
        textTransform: 'none',
        fontSize: 16,
        flex: 1, minWidth: 30
    },
    avatar: {
        flexGrow:1,
        color:'white',
        margin:'auto',
        padding: 'auto',
        width:400,
        height:150,
        position:'absolute'
    }
}

export default props => {

    return(
    <div >
        
        <Grid item sm={12} style={styles.paperContainer}>
        
            <Grid container justify="center" spacing={16}>
           
            <Grid item xs={12} sm={6}>
            
                <Typography   style={{fontFamily:'serif', color:'#FAFAFA',padding:20, margin: 20}} variant='display4'>PaperNote</Typography>
                <Typography style={styles.desc} variant='subheading'>Powered by ValueLabs</Typography>
                <p style={styles.desc}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco   
              </p>
               </Grid>
                <Paper style={styles.Paper}>
                { localStorage.getItem('error')?<SnackbarContent message='Invalid Cedentials' style={styles.error} />:''}
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
                                fullWidth 
                                required />

                            <TextField margin="dense"
                                id="pass"
                                label="password"
                                type="password"
                                fullWidth
                                required
                                onChange={e => props.change(e)} />
                            <br />

                            <br />
                            <Button
                                variant="contained"
                                color="primary"
                                type="submt"

                                style={styles.Button}
                            >LOGIN</Button>

                            <br />
                            <br />
                            <Typography style={{ color: "inherit" }} variant="subheading" gutterBottom>Not yet Registered ?</Typography>

                            <Button
                                variant="contained"
                                color="primary"
                                onClick={props.register}
                                style={styles.Button}
                            >Register</Button>

                        </form>

                    </CardBody>
                </Paper>
               
            </Grid>
        </Grid></div>)
}
