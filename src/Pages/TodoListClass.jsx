import React from "react";

import Paper from "../component/paper/PaperClass";
import Header from "../component/header/HeaderClass";
import TodoForm from "../component/todoForm/TodoForm";
import Todos from "../component/todos/TodosClass";

import Container from "../layout/Container";

class TodoList extends React.Component {
  state = {
    todos: [
      { text: "Learning React!", isCompleted: false },
      { text: "Learninng React Hooks", isCompleted: false },
      { text: "Learning React!", isCompleted: false }
    ],
    showAdd: false
  };

  // componentDidMount() {
  //   const todosStateLocalStorage =
  //     JSON.parse(localStorage.getItem("todos")) || [];

  //   const showAddStateLocalStorage =
  //     JSON.parse(localStorage.getItem("showAdd")) || false;

  //   this.setState({
  //     todos: todosStateLocalStorage,
  //     showAdd: showAddStateLocalStorage
  //   });
  // }

  // componentDidUpdate() {
  //   const { todos, showAdd } = this.state;
  //   localStorage.setItem("todos", JSON.stringify(todos));
  //   localStorage.setItem("showAdd", JSON.stringify(showAdd));
  // }

  addTodo = (value) => {
    const { todos } = this.state;

    if (todos.length < 10) {
      const addedTodo = [todos, { text: value, isCompleted: false }];

      this.setState({
        todos: addedTodo
      });
    } else {
      alert("Hanya Bisa 10 List Todo");
    }
  };

  completeTodo = (index) => {
    const addedTodo = [this.state.todos];
    addedTodo[index].isCompleted = !addedTodo[index].isCompleted;

    this.setState({
      todos: addedTodo
    });
  };

  clearTodos = () => {
    if (this.state.showAdd) {
      alert("Klik Button Finish Sebelum Clear");
      return;
    }

    this.setState({
      todos: []
    });
  };

  showAddToggle = () => {
    this.setState((prevState) => ({ showAdd: !prevState.showAdd }));
  };

  render() {
    const { todos, showAdd } = this.state;
    return (
      <Paper>
        <Container
          flexDirection="column"
          justifyContent="space-between"
          height="100%"
        >
          <Header
            showAddToggle={this.showAddToggle}
            showAdd={showAdd}
            clearTodos={this.clearTodos}
          />
          <TodoForm addTodo={this.addTodo} showAdd={showAdd} />
          <Todos todos={todos} completeTodo={this.completeTodo} />
        </Container>
      </Paper>
    );
  }
}

export default TodoList;
