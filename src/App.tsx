import { useSelector } from "react-redux";
import { selectLoading } from "./features/todos/todosSelectors";
import Spinner from "./components/Spinner/Spinner";
import { AppRouter } from "./routes/AppRouter";

function App() {
  const loading = useSelector(selectLoading);

  return (
    <>
      {loading && <Spinner />}
      <AppRouter />
    </>
  );
}

export default App;
