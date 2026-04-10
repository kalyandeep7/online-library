// BookCard.jsx - Reusable card component for displaying a book
import { Link } from 'react-router-dom'

function BookCard({ book }) {
  return (
    <div className="book-card">
      {/* Book cover image */}
      <img
        src={book.cover || 'https://via.placeholder.com/150x200?text=No+Cover'}
        alt={book.title}
        className="book-cover"
        onError={(e) => { e.target.src = 'https://via.placeholder.com/150x200?text=No+Cover' }}
      />

      <div className="book-card-info">
        {/* Book category badge */}
        <span className="category-badge">{book.category}</span>

        {/* Book title */}
        <h3 className="book-title">{book.title}</h3>

        {/* Book author */}
        <p className="book-author">by {book.author}</p>

        {/* Star rating display */}
        <p className="book-rating">⭐ {book.rating} / 5</p>

        {/* Link to view more details about this book */}
        <Link to={`/book/${book.id}`} className="btn btn-primary">
          View Details
        </Link>
      </div>
    </div>
  )
}

export default BookCard
