import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../app/store";
import { fetchTodos, fetchUsers } from "../features/todos/todosSlice";
import {
  selectPaginatedTodos,
  selectError,
} from "../features/todos/todosSelectors";

import TodoTable from "../components/TodoTable/TodoTable";
import Filters from "../components/Filters/Filters";
import Pagination from "../components/Pagination/Pagination";
import EmptyState from "../components/EmptyState/EmptyState";

const TodosPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  const todos = useSelector(selectPaginatedTodos);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchTodos());
    dispatch(fetchUsers());
  }, [dispatch]);

  if (error) return <p>{error}</p>;

  return (
    <div className="container">
      <h1>Todos Dashboard</h1>

      <Filters />

      {todos.length === 0 ? (
        <EmptyState message="No todos found" />
      ) : (
        <>
          <TodoTable todos={todos} />
          <Pagination />
        </>
      )}
    </div>
  );
};

export default TodosPage;
