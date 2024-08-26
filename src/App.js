import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
import TodosAction from "./components/Todos/TodosAction";
import "./styles.css";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (text) => {
    const newTodo = { text: text, isComplaydet: false, id: uuidv4() };

    setTodos([...todos, newTodo]);
  };

  const deletTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const togelTodoHandler = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isComplaydet: !todo.isComplaydet }
          : { ...todo }
      )
    );
  };
  const resetCompletedTodos = () => {
    setTodos([]);
  };

  const deletTodos = () => {
    setTodos(todos.filter((todo) => !todo.isComplaydet));
  };

  const completedTodos = todos.filter((todo) => todo.isComplaydet).length;

  return (
    <div className="App">
      <h1>Topshiriqlarni boshqarish</h1>
      <TodoForm addTodo={addTodoHandler} />
      {!!todos.length && (
        <TodosAction
          resetCompleted={resetCompletedTodos}
          deletTodos={deletTodos}
          completedTodosExsit={!!completedTodos}
        />
      )}
      <TodoList
        todos={todos}
        deletTodo={deletTodoHandler}
        togilTodo={togelTodoHandler}
      />
      {completedTodos > 0 && (
        <h2>
          {`${completedTodos} ta ${
            completedTodos > 1
              ? `topshiriqlar bajarildi`
              : `topshiriq bajarildi`
          }`}
        </h2>
      )}
    </div>
  );
}
