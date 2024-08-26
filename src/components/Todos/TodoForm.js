import { useState } from "react";
import Button from "../../UI/Button";
import style from "./TodoForm.module.css";
const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    addTodo(text);
    setText("");
  };
  return (
    <div className={style.todoForm}>
      <form onSubmit={onSubmitHandler}>
        <input
          placeholder="ro'yhatga qo'shing"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button title="Submit" type="submit">
          Qo'shish
        </Button>
      </form>
    </div>
  );
};

export default TodoForm;
