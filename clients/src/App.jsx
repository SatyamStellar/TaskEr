import { Routes, Route, Navigate, Outlet, useLocation } from "react-router-dom";


import { Dashboard, Login, Task, Users, TaskDetailes, Trash } from "./pages/index.js";


const App = () => {
  return (
    <main className="w-full min-h-screen bg-[#f3f4f6]">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/task" element={<Task />} />
          <Route path="/user" element={<Users />} />
          <Route path="/task-detail" element={<TaskDetailes />} />
          <Route path="/trash" element={<Trash />} />
        </Route>
      </Routes>
    </main>
  )
};

export default App;
