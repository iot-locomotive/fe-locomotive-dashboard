import LeftSidebar from "./LeftSidebar"
import PageContent from "./PageContent"

function Layout() {
  return (
    <>
      <div className="drawer lg:drawer-open ">
        <input
          id="left-sidebar-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        {/* PageContent */}
        <PageContent />
        {/* LeftSidebar */}
        <LeftSidebar />
      </div>
    </>
  )
}

export default Layout
