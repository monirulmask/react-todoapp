import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddTodo from "./AddTodo";

export default class TodoList extends Component {
  state = {
    todos: [
      {
        Id: "1",
        Title: "Report work starting to Fujiwara san",
        Status: "Done",
      },
      {
        Id: "2",
        Title: "Read news Japanese papers and write summary",
        Status: "Done",
      },
      { Id: "3", Title: "Attend to Japanese training", Status: "Done" },
      { Id: "4", Title: "Report Endtime to Fujiwara san", Status: "Pending" },
    ],
  };

  deleteToDo = (todo) => {
    const filteredItems = this.state.todos.filter((x) => x.Id != todo.Id);
    this.setState({
      todos: filteredItems,
    });
  };

  addToDo = (todo) => {
    this.setState({
      todos: [...this.state.todos, todo],
    });
  };

  editToDo = (x) => {
    this.setState((state) => ({
      todos: state.todos.map((todo) => {
        if (todo.Id === x.Id) {
          return {
            ...todo,
            Status: todo.Status === "Done" ? "Pending" : "Done",
          };
        } else {
          return todo;
        }
      }),
    }));
  };

  render() {
    return (
      <div>
        <AddTodo onAdd={this.addToDo}></AddTodo>
        <h1>TodoList </h1>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Task</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.todos.map((x) => {
              return (
                <tr key={x.Id}>
                  <td>{x.Id}</td>
                  <td>{x.Title}</td>
                  <td style={{ color: x.Status === "Done" ? "green" : "red" }}>
                    {x.Status}
                  </td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => this.deleteToDo(x)}
                    >
                      <span>
                        <FontAwesomeIcon icon="trash"></FontAwesomeIcon>
                      </span>
                    </button>
                    &nbsp;
                    <button
                      className="btn btn-primary"
                      onClick={() => this.editToDo(x)}
                    >
                      <span>
                        <FontAwesomeIcon icon="edit"></FontAwesomeIcon>
                      </span>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
