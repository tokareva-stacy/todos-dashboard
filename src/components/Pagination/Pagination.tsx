import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../../app/store";
import { setPage } from "../../features/todos/todosSlice";
import {
  selectFilters,
  selectTotalPages,
} from "../../features/todos/todosSelectors";
import styles from "./Pagination.module.scss";

const Pagination = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { page } = useSelector(selectFilters);
  const totalPages = useSelector(selectTotalPages);

  if (totalPages <= 1) return null;

  const handlePrev = () => {
    if (page > 1) dispatch(setPage(page - 1));
  };

  const handleNext = () => {
    if (page < totalPages) dispatch(setPage(page + 1));
  };

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className={styles.wrapper}>
      <button
        onClick={handlePrev}
        disabled={page === 1}
        className={styles.button}
      >
        ←
      </button>

      {pages.map((p) => (
        <button
          key={p}
          onClick={() => dispatch(setPage(p))}
          className={`${styles.button} ${p === page ? styles.active : ""}`}
        >
          {p}
        </button>
      ))}

      <button
        onClick={handleNext}
        disabled={page === totalPages}
        className={styles.button}
      >
        →
      </button>
    </div>
  );
};

export default Pagination;
