import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import TodosPage from "../pages/TodosPage";
import TodoDetailsPage from "../pages/TodoDetailsPage";

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/todos" replace />} />
      <Route path="/todos" element={<TodosPage />} />
      <Route path="/todos/:id" element={<TodoDetailsPage />} />
      <Route
        path="*"
        element={
          <div>
            Whoops!...Page not found. <Link to="/todos">Return to tasks</Link>
          </div>
        }
      />
    </Routes>
  </BrowserRouter>
);
