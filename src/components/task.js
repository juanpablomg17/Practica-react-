import React, { Component} from 'react';
import Tarea from './tarea'

class Tasks extends Component{

    render(){

        return this.props.task.map(task => <Tarea task={task} key={task.id}/>) 
    }
}



export default Tasks;