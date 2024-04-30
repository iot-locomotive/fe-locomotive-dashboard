import ArrowPathIcon from "@heroicons/react/24/outline/ArrowPathIcon"
import {
  LocomotiveSummary,
  useLazyGetLocomotiveSummaryQuery,
} from "../../../services/locomotiveSummary"
import { useEffect } from "react"

interface DashboardTopPropsType {
  handleSetStatsData: (summaryData: LocomotiveSummary | undefined) => void
}

function DashboardTop({ handleSetStatsData }: DashboardTopPropsType) {
  const [getLocomotiveSummary, { data }] = useLazyGetLocomotiveSummaryQuery()

  const refreshData = () => {
    getLocomotiveSummary()
  }

  useEffect(() => {
    handleSetStatsData(data)
  }, [data, handleSetStatsData])

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
