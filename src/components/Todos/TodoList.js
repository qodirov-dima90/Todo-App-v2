import Todo from "./Todo";

const TodoList = ({ todos, deletTodo, togilTodo }) => {
  return (
    <>
      {!todos.length && <h2>Topshiriqlar ro'yxati bo'sh</h2>}
      {todos.map((todo) => (
        <Todo
          todos={todo}
          key={todo.id}
          deletTodo={deletTodo}
          togilTodo={togilTodo}
        />
      ))}
    </>
  );
};

export default TodoList;
