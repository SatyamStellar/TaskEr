import { Routes, Route, Navigate, Outlet, useLocation } from "react-router-dom";
import { Toaster } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { Transition } from "@headlessui/react";

import { IoClose } from "react-icons/io5";
import { Dashboard, Login, Task, Users, TaskDetailes, Trash } from "./pages/index.js";
import { SideBar, Navbar } from "./components/index.js";
import { Fragment, useRef } from "react";
import { setSidebar } from "./redux/slices/authSlice.js";


const Layout = () => {
  const location = useLocation();
  const { user } = useSelector(state => state.auth);

  return user ? (
    <div className="w-full h-screen flex flex-col md:flex-row">
      <div className="w-1/5 h-screen bg-white sticky top-0 hidden md:block">
        <SideBar />
      </div>
      <MobileSidebar />
      <div className="flex-1 overflow-y-auto">
        <Navbar />
        <div className="p-4 2xl:px-10">
          <Outlet />
        </div>
      </div>
    </div>
  ) : (
    <Navigate to="/log-in" state={{ from: location }} replace />
  )

}

const MobileSidebar = () => {
  const { isSidebarOpen } = useSelector((state) => state.auth);
  const mobileMenuRef = useRef(null);
  const dispatch = useDispatch();

  const closeSidebar = () => {
    dispatch(setSidebar(false));
  }

  return (
    <>
      <Transition
        show={isSidebarOpen}
        as={Fragment}
        enter='transition-opacity duration-700'
        enterFrom='opacity-x-10'
        enterTo='opacity-x-100'
        leave='transition-opacity duration-700'
        leaveFrom='opacity-x-100'
        leaveTo='opacity-x-0'
      >
        {(ref) => (
          <div
            ref={(node) => (mobileMenuRef.current = node)}
            className={`
             "md:hidden w-full h-full bg-black/40 transition-all duration-700 transform ",
              setSidebar ? "translate-x-0" : "translate-x-full"
            `}
            onClick={closeSidebar}
          >
            <div className='bg-white -mt-5 w-3/4 h-full cursor-pointer'>
              <div className='w-full flex justify-end px-5 mt-5 '>
                <button
                  onClick={closeSidebar}
                  className='flex justify-end items-end mt-2'
                >
                  <IoClose size={25} />
                </button>
              </div>

              <div className='-mt-5'>
                <SideBar />
              </div>
            </div>
          </div>
        )}
      </Transition>
    </>
  )
}

const App = () => {
  return (
    <main className="w-full min-h-screen bg-[#f3f4f6]">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tasks" element={<Task />} />
          <Route path="/completed/:status" element={<Task />} />
          <Route path="/in-progress/:status" element={<Task />} />
          <Route path="/todo/:status" element={<Task />} />
          <Route path="/team" element={<Users />} />
          <Route path="/task/:id" element={<TaskDetailes />} />
          <Route path="/trashed" element={<Trash />} />
        </Route>
        <Route path="/log-in" element={<Login />} />
      </Routes>
      <Toaster richColors />
    </main>
  )
};

export default App;
