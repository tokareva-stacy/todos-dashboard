import styles from "./Spinner.module.scss";

const Spinner = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default Spinner;
