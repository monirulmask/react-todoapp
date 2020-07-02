import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

  render() {
    return (
      <div>
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
                  <td>{x.Status}</td>
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
                    <button className="btn btn-primary">
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
