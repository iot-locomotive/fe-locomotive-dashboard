import Bars3Icon from "@heroicons/react/24/outline/Bars3Icon"
import { useAppSelector } from "../app/hooks"

function Header() {
  const pageTitle = useAppSelector((state) => state.header.pageTitle)

  return (
    // navbar fixed  flex-none justify-between bg-base-300  z-10 shadow-md

    <>
      <div className="navbar sticky top-0 bg-base-100  z-10 shadow-md ">
        {/* Menu toogle for mobile view or small screen */}
        <div className="flex-1">
          <label
            htmlFor="left-sidebar-drawer"
            className="btn btn-primary drawer-button lg:hidden"
          >
            <Bars3Icon className="h-5 inline-block w-5" />
          </label>
          <h1 className="text-2xl font-semibold ml-2">{pageTitle}</h1>
        </div>
      </div>
    </>
  )
}

export default Header
