import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';
import About from './components/About.js'
class App extends React.Component {
  state = {
    todos: [
      {
        id:uuid.v4(),
        title: 'do 1 thing',
        completed:false
      }
      ,{
        id:uuid.v4(),
        title: 'do 2 thing',
        completed:true
      },
      {
        id:uuid.v4(),
        title: 'do 3 thing',
        completed:false
      }
    ]
  }
  markComplete =(id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      } return todo
    })});
  }
  deleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id!== id)
    })
  }
  addTodo = (title) => {
    const newTodo = {
      id:uuid.v4(),
      title,
      completed:false
    }
    this.setState({
      todos:[...this.state.todos, newTodo]
    })
  }

  
  render() {
    
      return (
        <BrowserRouter>
          <div className='App'>
          <Header />
          <Route exact path='/' render={props=>(<div>
          <AddTodo addTodo={this.addTodo} />
          <Todos todos={this.state.todos} markComplete = {this.markComplete} deleteTodo ={this.deleteTodo} />
            </div>)} ></Route>
            <Route path ='/about' component={About} />
          
          </div>
          </BrowserRouter>
      );
  }
}


export default App;
