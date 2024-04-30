import FaceFrownIcon from "@heroicons/react/24/solid/FaceFrownIcon"

function NotFound() {
  return (
    <div className="hero h-4/5 bg-base-200">
      <div className="hero-content text-error text-center">
        <div className="max-w-md">
          <FaceFrownIcon className="h-48 w-48 inline-block" />
          <h1 className="text-5xl  font-bold">404 - Not Found</h1>
        </div>
      </div>
    </div>
  )
}

export default NotFound
