import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUsers } from "../../features/todos/todosSelectors";
import type { Todo } from "../../features/todos/todosTypes";
import styles from "./TodoTable.module.scss";

interface Props {
  todos: Todo[];
}

const TodoTable = ({ todos }: Props) => {
  const users = useSelector(selectUsers);

  const getUserName = (userId: number) => {
    const user = users.find((u) => u.id === userId);
    return user ? user.name : userId;
  };

  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Status</th>
            <th>User</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.title}</td>

              <td>
                {todo.completed ? (
                  <span className={styles.completed}>Completed</span>
                ) : (
                  <span className={styles.active}>Active</span>
                )}
              </td>

              <td>{getUserName(todo.userId)}</td>

              <td>
                <Link to={`/todos/${todo.id}`}>
                  <button className={styles.button}>Details</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoTable;
