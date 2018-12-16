import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Typography } from '@material-ui/core'

const styles = {
    diag: {
        padding: 20, margin: 20, maxHeight: 500, overflow: 'auto', minWidth: 500
    },
    desc: { padding: 20, margin: 20, minHeight: 500 }
}

class Credits extends Component {

    constructor(props){
        super(props);
        this.state = props.details;
    }

    change = e => {
        
        this.setState({
            [e.id]: e.value
        })
    } 
    
    submit = () => {
        
        this.props.onaddmoney({
            ...this.state
        })
        
    }

    render() {
        return <Dialog
                open={this.props.open}
                aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Please Enter</DialogTitle>
                <form >
                    <DialogContent style={styles.diag} >
                        <DialogContentText>
                            Enter your Name and Amount</DialogContentText>
                        <Typography variant="caption" style={{ float: 'right' }}>
                            Credits Earned : {this.props.details.Dollar}
                        </Typography>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="credetor"
                            label="Name"
                            type="text"
                            onChange={(e) => this.change(e.target)}
                            fullWidth/>

                        <TextField margin="dense"
                            id="Dollar"
                            label="$"
                            type="text"
                            
                            onChange={(e) => this.change(e.target)}/>

                    </DialogContent>
                    <DialogActions>
                        <Button color="primary" onClick={this.props.close}>Cancel</Button>
                        <Button onClick={this.submit} color="primary" >Add</Button>
                    </DialogActions>
                </form>
            </Dialog>
        
        }}

export default Credits;
