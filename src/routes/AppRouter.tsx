import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodosPage from "../pages/TodosPage";
import TodoDetailsPage from "../pages/TodoDetailsPage";

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/todos" element={<TodosPage />} />
      <Route path="/todos/:id" element={<TodoDetailsPage />} />
    </Routes>
  </BrowserRouter>
);
