import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../app/store";
import { fetchTodos, fetchUsers } from "../features/todos/todosSlice";
import {
  selectPaginatedTodos,
  selectLoading,
  selectError,
  selectTotalPages,
  selectFilters,
} from "../features/todos/todosSelectors";

import TodoTable from "../components/TodoTable/TodoTable";

const TodosPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  const todos = useSelector(selectPaginatedTodos);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const totalPages = useSelector(selectTotalPages);
  const filters = useSelector(selectFilters);

  useEffect(() => {
    dispatch(fetchTodos());
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ padding: 20 }}>
      <h1>Todos</h1>

      {todos.length === 0 ? (
        <p>No todos found</p>
      ) : (
        <>
          <TodoTable todos={todos} />

          <p>
            Page {filters.page} of {totalPages}
          </p>
        </>
      )}
    </div>
  );
};

export default TodosPage;
