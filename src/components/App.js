import React, { Component } from 'react';
import ToDoList from './ToDo'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      toDo: [
        {description: 'wash car', finished: true},
        {description: 'clean house', finished: false},
        {description: 'make dinner', finished: false}
      ]
    }
  }

  render() {
    return (
      <section>
        <h1 id='listName'>Things to do</h1>
        <ul>
          {this.state.toDo.map((doThis, index) => {
            return <ToDoList key={index} desc={doThis.description} done={doThis.finished} />
          })}
        </ul>
      </section>
    );
  }
}

export default App;
