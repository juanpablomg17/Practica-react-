import React, {Component} from 'react';
import './task.css'
import PropTypes from 'prop-types';

class Tarea extends Component{

    Stylecompleted(){

        return{
            fontSize: '20px',
            color: this.props.task.done ? 'gray': 'black',
            textDecoration: this.props.task.done ? 'line-through' : 'none'
        }
    }

    render(){
        const {task} = this.props
       
      

        return <div style={this.Stylecompleted()} >
              {task.title} - 
              {task.description} - 
              {task.done} - 
              {task.id}
            <input type="checkbox"></input>
            <button style={btndelete}>
                x
            </button>


        </div>
    }
}

const btndelete = {
        
    fontSize: '19px',
    background: '#ea2017',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor: 'pointer'
}


export default Tarea;
