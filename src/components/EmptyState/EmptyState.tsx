import styles from "./EmptyState.module.scss";

interface Props {
  message: string;
}

const EmptyState = ({ message }: Props) => {
  return (
    <div className={styles.wrapper}>
      <p>{message}</p>
    </div>
  );
};

export default EmptyState;
