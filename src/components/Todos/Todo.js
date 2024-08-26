import { RiTodoFill, RiDeleteBin2Line } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
import style from "./Todo.module.css";
const Todo = ({ todos, deletTodo, togilTodo }) => {
  return (
    <div
      className={`${style.todo} ${
        todos.isComplaydet ? style.completedTodo : ""
      }`}
    >
      <RiTodoFill className={style.todoIcons} />
      <div className={style.todoText}>{todos.text}</div>
      <RiDeleteBin2Line
        className={style.deleteIcons}
        onClick={() => deletTodo(todos.id)}
      />
      <FaCheck
        className={style.checkIcons}
        onClick={() => togilTodo(todos.id)}
      />
    </div>
  );
};
export default Todo;
