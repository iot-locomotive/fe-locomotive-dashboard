import UserGroupIcon from "@heroicons/react/24/outline/UserGroupIcon"
import DashboardTop from "./components/DashboardTobBar"
import CreditCardIcon from "@heroicons/react/24/outline/CreditCardIcon"
import CircleStackIcon from "@heroicons/react/24/outline/CircleStackIcon"
import UsersIcon from "@heroicons/react/24/outline/UsersIcon"
import DashboardStats from "./components/DashboardStats"
import DoughnutChart from "./components/DoughnutChart"

const statsData = [
  {
    title: "New Users",
    value: "34.7k",
    icon: <UserGroupIcon className="w-8 h-8" />,
    description: "↗︎ 2300 (22%)",
  },
  {
    title: "Total Sales",
    value: "$34,545",
    icon: <CreditCardIcon className="w-8 h-8" />,
    description: "Current month",
  },
  {
    title: "Pending Leads",
    value: "450",
    icon: <CircleStackIcon className="w-8 h-8" />,
    description: "50 in hot leads",
  },
  {
    title: "Active Users",
    value: "5.6k",
    icon: <UsersIcon className="w-8 h-8" />,
    description: "↙ 300 (18%)",
  },
]

function Dashboard() {
  return (
    <>
      <DashboardTop />
      <div className="grid lg:grid-cols-4 mt-2 md:grid-cols-2 grid-cols-1 gap-6">
        {statsData.map((d, k) => {
          return <DashboardStats key={k} {...d} />
        })}
      </div>
      <div className="grid grid-cols-1 mt-4">
        <DoughnutChart />
      </div>
    </>
  )
}

export default Dashboard
