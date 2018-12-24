import React from 'react';
import Button from '../Dependency/Button';
import TextField from '@material-ui/core/TextField';
import { Grid, Paper, Typography} from '@material-ui/core';
import CardHeader from '../Dependency/CardHeader';
import CardBody from '../Dependency/CardBody';
import image from '../../images/background.jpg';




const styles = {
    paperContainer: {
        backgroundImage: `url(${image})`,backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        height: "100%"},
        
    Paper: {
        padding: 20, margin: 50, minHeight: 500, display: 'block', marginLeft: 'auto', marginRight: 'auto', maxWidth:400
    },
    desc: { padding: 20, margin: 20, minHeight: 500 
    },
    Button : {textTransform: 'none',
    fontSize: 16,
    flex:1, minWidth: 30}
}

export default props => {

        return <Grid item sm={12} style={styles.paperContainer}>
             <Grid container  justify="center" spacing={16}>
            <Paper style={styles.Paper}></Paper>
            <Paper style={styles.Paper}>
            
                <CardHeader color="primary" style={{marginTop:80}}>
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
                            onChange={e=>props.change(e)} />
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
                        <Typography style={{color: "inherit"}} variant="subheading" gutterBottom>Not yet Registered ?</Typography>
                        
                     <Button 
                            variant="contained"
                            color="primary"
                            onClick={props.register}
                            style={styles.Button}
                        >Register</Button>
                       
                     </form>
                    
                </CardBody>
            </Paper>
            <Paper style={styles.Paper}></Paper>
            </Grid>
        </Grid>
}
