// Navbar.jsx - Navigation bar shown on all pages except 404
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      {/* Brand / Logo */}
      <div className="navbar-brand">
        <NavLink to="/">📚 Online Library</NavLink>
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li>
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/books" className={({ isActive }) => isActive ? 'active' : ''}>
            Browse Books
          </NavLink>
        </li>
        <li>
          <NavLink to="/add-book" className={({ isActive }) => isActive ? 'active' : ''}>
            Add Book
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
