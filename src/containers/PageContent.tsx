import { Suspense, lazy, useEffect, useRef } from "react"
import { useAppSelector } from "../app/hooks"
import SuspenseContent from "./SuspenseContent"
import { Navigate, Route, Routes } from "react-router-dom"
import routes from "../routes"
import Header from "./Header"

const PageNotFound = lazy(() => import("../pages/NotFound"))

function PageContent() {
  const mainContentRef = useRef<HTMLInputElement>(null)
  const pageTitle = useAppSelector((state) => state.header.pageTitle)

  useEffect(() => {
    mainContentRef.current?.scroll({
      top: 0,
      behavior: "smooth",
    })
  }, [pageTitle])

  return (
    <div className="drawer-content flex flex-col ">
      <Header />
      <main
        className="flex-1 overflow-y-auto md:pt-4 pt-4 px-6  bg-base-200"
        ref={mainContentRef}
      >
        <Suspense fallback={<SuspenseContent />}>
          <Routes>
            {/* Redirecting path "/" to "/dashboard" */}
            <Route path="/" element={<Navigate to={"/dashboard"} replace />} />

            {routes.map((route, key) => {
              return (
                <Route
                  key={key}
                  path={`${route.path}`}
                  element={<route.component />}
                />
              )
            })}

            {/* Redirecting unknown url to 404 page */}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
        <div className="h-16"></div>
      </main>
    </div>
  )
}

export default PageContent
