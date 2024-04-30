import ChartPieIcon from "@heroicons/react/24/outline/ChartPieIcon"
import DashboardTop from "./components/DashboardTobBar"
import BuildingOfficeIcon from "@heroicons/react/24/outline/BuildingOfficeIcon"
import ArrowTrendingUpIcon from "@heroicons/react/24/outline/ArrowTrendingUpIcon"
import WrenchScrewdriverIcon from "@heroicons/react/24/outline/WrenchScrewdriverIcon"
import DashboardStats from "./components/DashboardStats"
import DoughnutChart from "./components/DoughnutChart"
import { useGetLocomotiveSummaryQuery } from "../../services/locomotiveSummary"
import { useEffect, useState } from "react"

function Dashboard() {
  const [statsData, setStatsData] = useState([
    {
      title: "Total Locomotive",
      value: 0,
      icon: <ChartPieIcon className="w-8 h-8" />,
      description: "",
    },
    {
      title: "Under Maintenance",
      value: 0,
      icon: <WrenchScrewdriverIcon className="w-8 h-8" />,
      description: "",
    },
    {
      title: "Transit at Station",
      value: 0,
      icon: <BuildingOfficeIcon className="w-8 h-8" />,
      description: "",
    },
    {
      title: "Departure",
      value: 0,
      icon: <ArrowTrendingUpIcon className="w-8 h-8" />,
      description: "",
    },
  ])
  const { data } = useGetLocomotiveSummaryQuery(null, {
    pollingInterval: Number(import.meta.env.VITE_DASHBOARD_POLLING_INTERVAL),
  })

  useEffect(() => {
    setStatsData((prev) =>
      prev.map((item, idx) => {
        switch (idx) {
          case 0:
            item.value = data?.totalLoc || 0
            break
          case 1:
            item.value = data?.totalLocMaintenance || 0
            break
          case 2:
            item.value = data?.totalLocTransit || 0
            break
          case 3:
            item.value = data?.totalLocDeparture || 0
            break
        }
        return item
      })
    )
  }, [data])

  return (
    <>
      <DashboardTop setStatsData={setStatsData} />
      <div className="grid lg:grid-cols-4 mt-2 md:grid-cols-2 grid-cols-1 gap-6">
        {statsData.map((d, k) => {
          return <DashboardStats key={k} {...d} />
        })}
      </div>
      <div className="grid grid-cols-1 mt-4">
        <DoughnutChart summary={data} />
      </div>
    </>
  )
}

export default Dashboard
