import React, { PureComponent, Fragment } from 'react';
import { Header, Footer } from './Components/layout';
import Ideas from './Components/Ideas'
import './App.css';
import { muscles } from './store';
import axios from 'axios';
import Loader from 'react-loader'

class App extends PureComponent {

  constructor(props){
    super(props);
    this.state = {
      exercises : [],
      item : '',
      details : '',
      form : false,
      id : '',
      Dollar : '',
      isupdating: false,
      isloaded: false
    }
    this.handleselectItem = this.handleselectItem.bind(this);
    this.getexercisesbyitem = this.getexercisesbyitem.bind(this);
    this.handleonSelectitems = this.handleonSelectitems.bind(this);
    this.handleclick = this.handleclick.bind(this);
    this.handleclose = this.handleclose.bind(this);
    this.handlechangevalue = this.handlechangevalue.bind(this);
    this.postItem = this.postItem.bind(this);
  }

  componentDidMount(){
    fetch('http://localhost:5002/api/db')
      .then(res => res.json())
      .then(exercise =>   this.setState({exercises : exercise, isloaded: true}))
  }
  
  handleselectItem(item){
        this.setState({item:item});
  }
  getexercisesbyitem(){
    
    return Object.entries(this.state.exercises.reduce((exercises, exercise) => { 
      const { muscles} = exercise;
      exercises[muscles] =  exercises[muscles] ? [...exercises[muscles], exercise] : [exercise]
      return exercises;
    }, {}))
  }
  handleonSelectitems(ev){
    
    this.setState(({exercises}) => ({
        details : exercises.find(e => e.id===ev)
    }))
  }
  handleclick(){
    
    this.setState({ form : true});
  }
  handleclose(){
    this.setState({form:false})
  }
  handlechangevalue(ev){
    ev.preventDefault();  
    var partialState = {};
    partialState[ev.target.id] = ev.target.value;
    this.setState({
      partialState
    })
  }
  handdleaddmoney = exercise => {
    
    this.setState(({exercises}) => ({
        exercises: [
          ...exercises.filter(ex => ex.id !== exercise.id),
          exercise
        ],
        form: false,
        isupdating: true
    }));
   
    this.postItem(exercise);
  }
  postItem(exercise){
    let url = 'http://localhost:5002/api/db/put';
    const options = {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      data: {...exercise},
      url,
    };
    axios(options)
    .then(res => {
      
      this.setState({isupdating:false})
    })
  }
  render() {
    const exercises = this.getexercisesbyitem();
    
    return (
      <Fragment>
        <Loader loaded={this.state.isloaded} color="#40c4ff" height={10} width={10}>
        <Header />
        <Ideas onaddmoney={this.handdleaddmoney} style={{paddingTop: 200}} form={this.state.form} close={this.handleclose} items = {this.state.item} exercises = {exercises} Dollar={this.state.Dollar} changevalue={this.handlechangevalue} onSelect = {this.handleonSelectitems} details={this.state.details} click={this.handleclick} />
        <Footer item = {this.state.item} muscles = {muscles} onSelect = {this.handleselectItem}/>
        </Loader>
      </Fragment>
    );
  }
}

export default App;
