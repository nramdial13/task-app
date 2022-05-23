import React, { Component } from "react";

class Search extends Component {
  constructor() {
    super();
    this.state = { value: "" };

    this.eventTaskHandler = this.eventTaskHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  eventTaskHandler(event) {
    event.preventDefault();
    console.log(this.state.value);
  }

  render() {
    // const tasksArray = [];
    // let entry;
    return (
      <div>
        <form onSubmit={this.eventTaskHandler}>
          <label>
            Name:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <button>Click to Enter</button>
      </div>
    );
  }
}

export default Search;
