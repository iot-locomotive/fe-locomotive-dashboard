import ArrowPathIcon from "@heroicons/react/24/outline/ArrowPathIcon"

function DashboardTop() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="" />
      <div className="text-right ">
        <button className="btn btn-ghost btn-sm normal-case">
          <ArrowPathIcon className="w-4 mr-2" />
          Refresh Data
        </button>
      </div>
    </div>
  )
}

export default DashboardTop
