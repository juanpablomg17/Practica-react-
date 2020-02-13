import React, { Component } from 'react';

import './App.css';
import task from './Examples/task.json'

import Tasks from './components/task.js';



class App extends Component{

  state = {
    task: task
  } 
  render() {
    return <div>
      {<Tasks task={this.state.task}/>}
    </div>

}     
  }



export default App;
