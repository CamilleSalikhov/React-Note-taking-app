import React, { Component } from 'react'
import PropTypes from 'prop-types'

const btnStyle = {
    background:'red',
    borderRadius:'50%'
}
export class TodoItem extends Component {
    getStyle = () => {
        return {
            background:'grey',
            textDecoration: this.props.todo.completed ? 
            'line-through' : 'none'
        }
    } 
  render() {
      const {id, title} = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p style={{padding : '0',
    margin : '0',
    border:'1px solid black'}}><input type='checkbox' onChange = {this.props.markComplete.bind(this,id)}></input>
        {this.props.todo.title} 
        <button onClick ={this.props.deleteTodo.bind(this,id)} style = {btnStyle}>x</button>
        </p>
      </div>
    )
  }
}
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}


export default TodoItem
