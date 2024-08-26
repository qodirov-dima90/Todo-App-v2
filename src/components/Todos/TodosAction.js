import Button from "../../UI/Button";
import { RiRefreshLine } from "react-icons/ri";
import { RiDeleteBin2Line } from "react-icons/ri";
const TodosAction = ({ resetCompleted, deletTodos, completedTodosExsit }) => {
  return (
    <div>
      <Button title="Reset todos" onClick={resetCompleted}>
        <RiRefreshLine />
      </Button>
      <Button
        title="Cliear Completed Todos"
        onClick={deletTodos}
        disabled={!completedTodosExsit}
      >
        <RiDeleteBin2Line />
      </Button>
    </div>
  );
};

export default TodosAction;
