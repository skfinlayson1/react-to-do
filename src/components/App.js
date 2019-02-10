import React, { Component } from 'react';
import ToDoList from './ToDo';
import AddToDo from './AddToDo';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      toDo: [
        {description: 'wash car', finished: false},
        {description: 'clean house', finished: false},
        {description: 'make dinner', finished: false}
      ]
    }
  }

  remove = (id) => {
    this.setState( (prevState) => {
      return {
        toDo: prevState.toDo.filter( desc => desc.description !== id)
      }
    })
  }

  handleCheckBox = (index) => {
     this.setState(prevState => {
       return {
         finished: prevState.toDo[index].finished = this.state.toDo[index].finished? false: true
       }
    })
  }

  newToDo = (name) => {
    this.setState( (prevState) => {
      return {
        toDo: [
          ...prevState.toDo,
          {description: name, finished: false}
        ]
      }
    })
  }

  render() {
    return (
      <section>
        <h1 id='listName'>Things to do</h1>
        <ul>
          {this.state.toDo.map((doThis, index) => {
            return <ToDoList key={index} desc={doThis.description} done={doThis.finished} checkedBox={() => this.handleCheckBox(index)} remove={this.remove} />
          })}
        </ul>
        <AddToDo newToDo={this.newToDo} />
      </section>
    );
  }
}

export default App;
