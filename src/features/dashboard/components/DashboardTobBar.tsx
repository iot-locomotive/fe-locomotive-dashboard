import ArrowPathIcon from "@heroicons/react/24/outline/ArrowPathIcon"
import { useLazyGetLocomotiveSummaryQuery } from "../../../services/locomotiveSummary"
import React, { useEffect } from "react"

interface DashboardTopPropsType {
  setStatsData: React.Dispatch<
    React.SetStateAction<
      {
        title: string
        value: number
        icon: JSX.Element
        description: string
      }[]
    >
  >
}

function DashboardTop({ setStatsData }: DashboardTopPropsType) {
  const [getLocomotiveSummary, { data }] = useLazyGetLocomotiveSummaryQuery()

  const refreshData = () => {
    getLocomotiveSummary()
  }

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
  }, [data, setStatsData])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="" />
      <div className="text-right ">
        <button
          className="btn btn-ghost btn-sm normal-case"
          onClick={() => refreshData()}
        >
          <ArrowPathIcon className="w-4 mr-2" />
          Refresh Data
        </button>
      </div>
    </div>
  )
}

export default DashboardTop
