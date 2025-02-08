import { MdOutlineSearch } from "react-icons/md"
import { useDispatch, useSelector } from "react-redux"
import { setSidebar } from "../redux/slices/authSlice"

import { UserAvatar } from "../components/index"

const Navbar = () => {
  const { user } = useSelector(state => state.auth)

  const dispatch = useDispatch()

  return (
    <div className="flex items-center justify-between bg-white py-3 px-4 2xl:py-4 sticky z-10 top-0">
      <div className="flex gap-4">
        <button
          onClick={() => dispatch(setSidebar(true))}
          className="text-2xl text-gray-500 block md:hidden "
        >≡</button>
        <div className="w-64 2xl:w-[400px] items-center flex py-2 px-3 gap-2 rounded-full bg-primary">
          <MdOutlineSearch className="text-gray-500 text-xl" />
          <input
            type="text"
            placeholder="Search"
            className="w-full flex-1 bg-transparent outline-none placeholder:text-gray-500 text-gray-800" />
        </div>
      </div>
      <div className="flex gap-2 items-center">
        {/* <NotificationPanel/> */}
        <UserAvatar />
      </div>
    </div>
  )
}

export default Navbar
