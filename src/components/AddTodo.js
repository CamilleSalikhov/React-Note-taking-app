import React, { Component } from 'react';
import PropTypes from 'prop-types'

export class AddTodo extends Component {
    state= {
        title:''
    }
    onChange = (e) => this.setState({title: e.target.value})
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title:''});
    }
  render() {
    return (
      <form className='form' onSubmit={this.onSubmit}>
          <input type='text' style={{flex:'10'}} name='title' placeholder='Add a note!' onChange={this.onChange}></input>
          <input type='submit' className='btn' value='submit' ></input>

      </form>
    )
  }
}
AddTodo.propTypes = {
    addTodo:PropTypes.func.isRequired
     
} 

export default AddTodo
