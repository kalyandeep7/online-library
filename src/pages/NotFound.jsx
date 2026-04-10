// NotFound.jsx - 404 page for undefined routes
// NOTE: This page intentionally does NOT include the Navbar component
import { useLocation, Link } from 'react-router-dom'

function NotFound() {
  // Get the current location to display the invalid URL
  const location = useLocation()

  return (
    <div className="not-found-page">
      <div className="not-found-content">
        {/* 404 icon and heading */}
        <h1 className="not-found-title">404</h1>
        <h2>Page Not Found</h2>
        <p>
          The page <strong className="invalid-url">"{location.pathname}"</strong> does not exist.
        </p>
        <p>Sorry, the page you are looking for could not be found.</p>

        {/* Link back to the Home page */}
        <Link to="/" className="btn btn-primary btn-lg">
          ← Go Back to Home
        </Link>
      </div>
    </div>
  )
}

export default NotFound
