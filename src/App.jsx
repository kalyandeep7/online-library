// App.jsx - Defines all the routes for the application
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import BrowseBooks from './pages/BrowseBooks'
import BookDetails from './pages/BookDetails'
import AddBook from './pages/AddBook'
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
      {/* Navbar is shown on all pages except 404 (handled inside NotFound) */}
      <Routes>
        {/* Home page */}
        <Route path="/" element={<><Navbar /><Home /></>} />

        {/* Browse all books */}
        <Route path="/books" element={<><Navbar /><BrowseBooks /></>} />

        {/* Browse books filtered by category - dynamic route */}
        <Route path="/books/:category" element={<><Navbar /><BrowseBooks /></>} />

        {/* Book details - dynamic route by book id */}
        <Route path="/book/:id" element={<><Navbar /><BookDetails /></>} />

        {/* Add a new book */}
        <Route path="/add-book" element={<><Navbar /><AddBook /></>} />

        {/* 404 - catch all undefined routes, no Navbar */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
