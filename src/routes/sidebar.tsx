import Squares2X2Icon from "@heroicons/react/24/outline/Squares2X2Icon"

export interface RouteSubmenu {
  path: string
  icon: JSX.Element
  name: string
}

export interface RouteParent {
  path: string
  icon: JSX.Element
  name: string
  submenu: RouteSubmenu[]
}

const iconClasses = `h-6 w-6`
// const submenuIconClasses = `h-5 w-5`

const routes: RouteParent[] = [
  {
    path: "/dashboard",
    icon: <Squares2X2Icon className={iconClasses} />,
    name: "Dashboard",
    submenu: [],
  },
]

export default routes
