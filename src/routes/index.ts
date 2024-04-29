import { lazy } from "react"

const Dashboard = lazy(() => import("../pages/DashboardPage"))

const routes = [
  {
    path: "/dashboard",
    component: Dashboard,
  },
]

export default routes
