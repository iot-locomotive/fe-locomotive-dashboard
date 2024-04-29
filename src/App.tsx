import "./App.css"
import { lazy } from "react"
import initializeApp from "./app/init"
import { BrowserRouter, Route, Routes } from "react-router-dom"

const Layout = lazy(() => import("./containers/Layout"))

// Initializing different libraries
initializeApp()

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Place new routes over this */}
          <Route path="/*" element={<Layout />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
