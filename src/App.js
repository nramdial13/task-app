import React, { Component } from "react";
import Overview from "./Components/Overview";
import uniqid from "uniqid";

class App extends Component {
  constructor() {
    super();
    this.state = { task: { value: "", id: uniqid() }, tasks: [] };

    this.eventTaskHandler = this.eventTaskHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      task: { value: event.target.value, id: this.state.task.id },
    });
  }

  eventTaskHandler(event) {
    event.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: { text: "", id: uniqid() },
    });
  }

  render() {
    const { task, tasks } = this.state;
    return (
      <div>
        <form onSubmit={this.eventTaskHandler}>
          <label>Enter Information</label>
          <input
            type="text"
            value={task.text}
            onChange={this.handleChange}
            id="taskInput"
          ></input>
          <button type="submit">Add Task</button>
        </form>
        <Overview tasks={tasks} />
      </div>
    );
  }
}

export default App;
