import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../app/store";
import { fetchTodoById } from "../features/todos/todosSlice";
import {
  selectSelectedTodo,
  selectUsers,
  selectLoading,
} from "../features/todos/todosSelectors";
import styles from "./TodoDetailsPage.module.scss";

const TodoDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const todo = useSelector(selectSelectedTodo);
  const users = useSelector(selectUsers);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    if (id) {
      dispatch(fetchTodoById(id));
    }
  }, [dispatch, id]);

  if (loading) return <p>Loading...</p>;

  if (!todo) return <p>Todo not found</p>;

  const user = users.find((u) => u.id === todo.userId);

  return (
    <div className={styles.wrapper}>
      <button onClick={() => navigate("/todos")} className={styles.back}>
        ← Back
      </button>

      <div className={styles.card}>
        <h2>{todo.title}</h2>

        <p>
          <strong>Status:</strong> {todo.completed ? "Completed" : "Active"}
        </p>

        <p>
          <strong>User ID:</strong> {todo.userId}
        </p>

        <p>
          <strong>User Name:</strong> {user ? user.name : "Unknown"}
        </p>
      </div>
    </div>
  );
};

export default TodoDetailsPage;
