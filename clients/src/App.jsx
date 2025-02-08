import { Routes, Route, Navigate, Outlet, useLocation } from "react-router-dom";
import { Toaster } from "sonner";


import { Dashboard, Login, Task, Users, TaskDetailes, Trash } from "./pages/index.js";
import { useSelector } from "react-redux";

const Layout = () => {
  const location = useLocation();
  const { user } = useSelector(state => state.auth);

  return user ? (
    <div className="w-full h-screen flex flex-col md:flex-row">
      <div className="w-1/5 h-screen bg-white sticky top-0 hidden md:block">
        {/* Sidebar */}
      </div>
      {/*<MobileSidebar /> */}
      <div className="flex-1 overflow-y-auto">
        {/* Navbar */}
        <div className="p-4 2xl:px-10">
          <Outlet />
        </div>
      </div>
    </div>
  ) : (
    <Navigate to="/log-in" state={{ from: location }} replace />
  )

}

const App = () => {
  return (
    <main className="w-full min-h-screen bg-[#f3f4f6]">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tasks >" element={<Task />} />
          <Route path="/complete/:status >" element={<Task />} />
          <Route path="/in-progress/:status >" element={<Task />} />
          <Route path="/team >" element={<Users />} />
          <Route path="/task/:id >" element={<TaskDetailes />} />
          <Route path="/trashed >" element={<Trash />} />
        </Route>
        <Route path="/log-in" element={<Login />} />
      </Routes>
      <Toaster richColors />
    </main>
  )
};

export default App;
