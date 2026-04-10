// BrowseBooks.jsx - Displays all books with category filter and search functionality
import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import BookCard from '../components/BookCard'

// Available categories for filter buttons
const categories = ['All', 'Fiction', 'Non-Fiction', 'Sci-Fi', 'Fantasy', 'Mystery', 'Biography']

function BrowseBooks() {
  // Get category from URL params (e.g., /books/Fiction)
  const { category } = useParams()

  // Local state for search input and selected category filter
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(category || 'All')

  // Get all books from Redux store
  const books = useSelector((state) => state.books.books)

  // Filter books by selected category
  const categoryFiltered =
    selectedCategory === 'All'
      ? books
      : books.filter((book) => book.category === selectedCategory)

  // Further filter by search query (title or author)
  const filteredBooks = categoryFiltered.filter(
    (book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="page">
      <h1>Browse Books</h1>

      {/* Search bar to filter books by title or author */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by title or author..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>

      {/* Category filter buttons */}
      <div className="category-filters">
        {categories.map((cat) => (
          <Link
            key={cat}
            to={cat === 'All' ? '/books' : `/books/${cat}`}
            className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </Link>
        ))}
      </div>

      {/* Display filtered books or a "no results" message */}
      {filteredBooks.length > 0 ? (
        <div className="books-grid">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      ) : (
        <p className="no-results">No books found matching your search.</p>
      )}
    </div>
  )
}

export default BrowseBooks
