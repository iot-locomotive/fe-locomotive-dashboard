import { useEffect } from "react"
import { useAppDispatch } from "../app/hooks"
import { setPageTitle } from "../features/common/headerSlice"
import Dashboard from "../features/dashboard/Dashboard"

function DashboardPage() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setPageTitle("Locomotive Summary Dashboard"))
  }, [dispatch])

  return <Dashboard />
}

export default DashboardPage
