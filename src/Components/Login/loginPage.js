import React from 'react';
import Button from '../Dependency/Button';
import TextField from '@material-ui/core/TextField';
import { Grid, Paper, Typography} from '@material-ui/core';
import CardHeader from '../Dependency/CardHeader';
import CardBody from '../Dependency/CardBody';
import CardFooter from '../Dependency/CardFooter';

const styles = {
    Paper: {
        padding: 20, margin: 50, minHeight: 500, display: 'block', marginLeft: 'auto', marginRight: 'auto', maxWidth:400
    },
    desc: { padding: 20, margin: 20, minHeight: 500 }
}

export default props => {

        return <Grid item sm>
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
                            id="Dollar"
                            label="pass"
                            type="password"
                            fullWidth
                            onChange={e => props.change(e)} />
                            <br />
                            <CardFooter>
                            <br />
                        <Button
                            variant="contained"
                            color="primary"
                            type="submt"
                            
                            style={{
                                textTransform: 'none',
                                fontSize: 16,
                                marginLeft: -20
                            }}
                        >LOGIN</Button></CardFooter>
                     </form>
                </CardBody>
            </Paper>
        </Grid>
}
