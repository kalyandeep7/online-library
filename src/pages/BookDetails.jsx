// BookDetails.jsx - Shows detailed information about a single book
import { useParams, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function BookDetails() {
  // Get the book id from the URL (e.g., /book/3)
  const { id } = useParams()

  // Find the specific book from Redux store using the id
  const book = useSelector((state) =>
    state.books.books.find((b) => b.id === parseInt(id))
  )

  // If book not found, show a not found message
  if (!book) {
    return (
      <div className="page" style={{ textAlign: 'center' }}>
        <h2>Book not found!</h2>
        <Link to="/books" className="btn btn-primary">Back to Browse</Link>
      </div>
    )
  }

  return (
    <div className="page">
      <div className="book-details-container">
        {/* Book cover image */}
        <div className="book-details-cover">
          <img
            src={book.cover || 'https://via.placeholder.com/200x300?text=No+Cover'}
            alt={book.title}
            onError={(e) => { e.target.src = 'https://via.placeholder.com/200x300?text=No+Cover' }}
          />
        </div>

        {/* Book information */}
        <div className="book-details-info">
          <span className="category-badge">{book.category}</span>
          <h1>{book.title}</h1>
          <p className="detail-author">by <strong>{book.author}</strong></p>
          <p className="detail-rating">⭐ Rating: {book.rating} / 5</p>
          <p className="detail-description">{book.description}</p>

          {/* Back to Browse button */}
          <Link to="/books" className="btn btn-secondary">← Back to Browse</Link>
        </div>
      </div>
    </div>
  )
}

export default BookDetails
