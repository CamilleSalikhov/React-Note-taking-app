import React  from 'react';
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'
export default class Todos extends React.Component {
    
     
    render() {
        return this.props.todos.map((e) => (
            <TodoItem key={e.id}  todo = {e} markComplete = {this.props.markComplete} deleteTodo ={this.props.deleteTodo} />
        ))
    }
}
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
}