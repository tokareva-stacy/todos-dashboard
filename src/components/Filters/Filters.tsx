import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../../app/store";
import {
  setSearch,
  setStatus,
  resetFilters,
} from "../../features/todos/todosSlice";
import { selectFilters } from "../../features/todos/todosSelectors";
import styles from "./Filters.module.scss";

const Filters = () => {
  const dispatch = useDispatch<AppDispatch>();
  const filters = useSelector(selectFilters);

  return (
    <div className={styles.wrapper}>
      {/* Search */}
      <input
        type="text"
        placeholder="Search by title..."
        value={filters.search}
        onChange={(e) => dispatch(setSearch(e.target.value))}
        className={styles.input}
      />

      {/* Status */}
      <select
        value={filters.status}
        onChange={(e) => dispatch(setStatus(e.target.value as any))}
        className={styles.select}
      >
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="active">Active</option>
      </select>

      {/* Reset */}
      <button onClick={() => dispatch(resetFilters())} className={styles.reset}>
        Reset filters
      </button>
    </div>
  );
};

export default Filters;
