import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Button({ onClick }) {
  const [inputValue, setInputValue] = useState('');

  const handleButtonClick = () => {
    onClick(inputValue); 
    setInputValue(''); 
  };

  return (
    <div>
      <input
        type="text"
        placeholder='What do'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
      <button onClick={handleButtonClick}>Add Task</button>
    </div>
  );
}

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: '', tasks: []};
  }

  handleAddTask = (inputValue) => {
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, inputValue], // adds a new value to array
      inputValue: '', // reset value to empty string
    }));
  };

  handleRemoveTask = (index) => {
    this.setState((prevState) => {
      const updatedTasks = [...prevState.tasks];
      updatedTasks.splice(index, 1); // Remove the task at the specified index
      return { tasks: updatedTasks };
    });
  };

  render() {
    return (
      <div>
        <h2>Something</h2>
        <Button onClick={this.handleAddTask} />
        <p>Task: {this.state.inputValue}</p>
        <ul>
          {this.state.tasks.map((task, index) => (
            <li key={index} onClick={() => this.handleRemoveTask(index)}>{task}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const root = document.getElementById("root");
ReactDOM.render(<Main />, root);
