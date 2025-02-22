import {
  MdAdminPanelSettings,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdKeyboardDoubleArrowUp,
} from "react-icons/md";
import { LuClipboardEdit } from "react-icons/lu";
import { FaNewspaper, FaUsers } from "react-icons/fa";
import { FaArrowsToDot } from "react-icons/fa6";

import moment from "moment";
import { summary } from "../assets/data.js"
import Chart from "../components/Chart.jsx";

const Dashboard = () => {

  const totals = summary.tasks

  const stats = [
    {
      _id: "1",
      label: "TOTAL TASK",
      total: summary?.totalTasks || 0,
      icon: <FaNewspaper />,
      bg: "bg-[#1d4ed8]",
    },
    {
      _id: "2",
      label: "COMPLTED TASK",
      total: totals["completed"] || 0,
      icon: <MdAdminPanelSettings />,
      bg: "bg-[#0f766e]",
    },
    {
      _id: "3",
      label: "TASK IN PROGRESS ",
      total: totals["in progress"] || 0,
      icon: <LuClipboardEdit />,
      bg: "bg-[#f59e0b]",
    },
    {
      _id: "4",
      label: "TODOS",
      total: totals["todo"],
      icon: <FaArrowsToDot />,
      bg: "bg-[#be185d]" || 0,
    },
  ];

  const Card = ({ bg, icon, count, label }) => {
    return (
      <div className="w-full h-32 bg-white p-5 shadow-md rounded-md flex items-center justify-center">
        <div className=" flex flex-1 h-full flex-col justify-between">
          <p className="text-base text-gray-700">{label}</p>
          <span className="text-2xl font-semibold">{count}</span>
          <span className="text-sm text-gray-600">{"last month 11"}</span>
        </div>
        <div className={`w-10 h-10 flex rounded-full items-center justify-center text-white ${bg}`}>
          {icon}
        </div>
      </div>
    )
  }

  return (
    <div className="w-full py-4 ">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
        {stats.map(({ icon, bg, total, label }, index) => (
          <Card
            key={index}
            bg={bg}
            icon={icon}
            count={total}
            label={label}
          />
        ))}
      </div>
      <div className="bg-white w-full my-16 p-4 rounded shadow">
        <h4 className="text-2xl text-gray-700 font-semibold">Chart by Priority</h4>
        <Chart />
      </div>
    </div>
  )
}

export default Dashboard
