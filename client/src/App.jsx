import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { TaskPage } from "./pages/TaskPage";
import { TaskFromPage } from "./pages/TaskFromPage";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <BrowserRouter>

<Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/tasks"/>} />
        <Route path="/tasks" element={<TaskPage />} />
        <Route path="/tasks-create" element={<TaskFromPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App