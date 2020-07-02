import React, { Component } from "react";
export default class AddTodo extends Component {
  state = {
    Id: "",
    Title: "",
    Status: "Pending",
  };

  handleIdChange = (event) => {
    this.setState({
      Id: event.target.value,
    });
  };

  handleTitleChange = (event) => {
    this.setState({
      Title: event.target.value,
    });
  };

  handleStatusChange = (event) => {
    this.setState({
      Status: event.target.value,
    });
  };
  handleToDoSubmit = (event) => {
    event.preventDefault();
    this.props.onAdd({
      Id: this.state.Id,
      Title: this.state.Title,
      Status: this.state.Status,
    });
    this.setState({
      Id: "",
      Title: "",
      Status: "Pending",
    });
  };
  render() {
    return (
      <div>
        <h3 className="text-left col">Add To Do</h3>
        <form onSubmit={this.handleToDoSubmit}>
          <div className="form-group col-md-2">
            <input
              value={this.state.Id}
              onChange={this.handleIdChange}
              className="form-control"
              placeholder="Enter Id"
            />
          </div>
          <div className="form-group col-md-3">
            <input
              value={this.state.Title}
              onChange={this.handleTitleChange}
              className="form-control"
              placeholder="Enter Title"
            />
          </div>
          <div className="form-group col-md-3">
            <select
              value={this.state.Status}
              onChange={this.handleStatusChange}
              className="form-control"
            >
              <option value="Done">Done</option>
              <option value="Pending">Pending</option>
            </select>
          </div>
          <div className="form-group col-md-2">
            <button type="submit" className="form-control btn btn-primary">
              Add Todo
            </button>
          </div>
        </form>
      </div>
    );
  }
}
