import React, { Fragment } from 'react';
import { Grid, Paper, Typography, ListItem, List, ListItemText } from '@material-ui/core';
import { withTheme } from '@material-ui/core/styles';
import Button from '../Dependency/Button';
import Badge from '@material-ui/core/Badge';
import CardAvatar from '../Dependency/CardAvatar';
import CardHeader from '../Dependency/CardHeader';
import profile from '../../images/icon.png';
import CardBody from '../Dependency/CardBody';
import CardFooter from '../Dependency/CardFooter';
import  Credits  from '../layout/Credit';
import { AttachMoney } from '@material-ui/icons'

class Idea extends React.Component {

    render() {
        const data = this.props.exercises;
        let data2 = '';
        const items = this.props.items;
        const details = this.props.details;
        const id = this.props.details.id;
        console.log(this.props.details)
    
        let isform = '';
        if (this.props.form) isform = <Credits onaddmoney={this.props.onaddmoney} close={this.props.close} details={details} change={this.props.changevalue} open={this.props.form} />

        data2 = data.map(([group, data2]) => {
            
            return (
                
                !items || items === group ? <Fragment > <Typography key={group} variant="headline" style={{ textTransform: 'capitalize', boxShadow: '2px 2px 2px  #9fa8da' }} gutterBottom>{group}</Typography>
                    <List component="ul">
                        {data2.map(element =>
                               
                            <ListItem alignItems="flex-start" button onClick={(e) => this.props.onSelect(element.id)}>
                                <ListItemText key={element.title} primary={element.title} />
                                <Badge color="secondary" badgeContent={element.Dollar} style={{ opacity: .8 }} >
                                    <AttachMoney />
                                    <br />
                                </Badge>

                            </ListItem>)}
                    </List></Fragment> : null

            )
        })
        const styles = {
            Paper: {
                padding: 20, margin: 20, maxHeight: 500, overflow: 'auto'
            },
            desc: { padding: 20, margin: 20, minHeight: 500, display: 'block', marginLeft: 'auto', marginRight: 'auto' }
        }

        return (
            <Grid container>
                <Grid item sm>

                    <Paper style={styles.Paper}>
                        {data2}
                    </Paper>
                </Grid>
                <Grid item sm>
                    <Paper style={styles.desc}>
                        <CardAvatar profile >
                            <a href='#profile' onClick={e => e.preventDefault()}>
                                <img src={profile} alt="icon" />
                            </a>
                        </CardAvatar>
                        {!id ? <div style={{ marginTop: 75 }}><Typography variant="display1">Welcome!</Typography>
                            <br />
                            <Typography variant="subheading">Click on left pane to get the details</Typography></div> :
                            <div style={{ marginTop: 75 }}>
                                <CardHeader color="primary">

                                    <Typography style={{ color: 'inherit' }} variant="headline">{details.title} <div style={{float:'right'}}>Credits:{details.Dollar}</div></Typography></CardHeader>
                                <br />
                                <Typography variant="subheading"></Typography>
                                <CardBody>
                                    <Typography variant="h6" gutterBottom>
                                        {details.description}
                                        
                                    </Typography>
                                    <CardFooter>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={this.props.click}
                                            style={{
                                                textTransform: 'none',
                                                fontSize: 16,
                                                marginLeft: -20
                                            }}
                                        >Click to Add Credit</Button></CardFooter>
                                            {isform}
                                </CardBody>

                            </div>
                        }
                    </Paper>
                </Grid>
            </Grid>
        )
    }
}
export default withTheme()(Idea);

