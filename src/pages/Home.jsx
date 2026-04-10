// Home.jsx - Landing page with welcome message, categories, and popular books
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import BookCard from '../components/BookCard'

// List of book categories available in the library
const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi', 'Fantasy', 'Mystery', 'Biography']

function Home() {
  // Get books from Redux store
  const books = useSelector((state) => state.books.books)

  // Show only top 4 books as "popular books"
  const popularBooks = books.slice(0, 4)

  return (
    <div className="page">
      {/* Hero / Welcome section */}
      <section className="hero">
        <h1>Welcome to Online Library 📚</h1>
        <p>Discover thousands of books across multiple genres. Start your reading journey today!</p>
        <Link to="/books" className="btn btn-primary btn-lg">Browse All Books</Link>
      </section>

      {/* Book Categories section */}
      <section className="section">
        <h2>Browse by Category</h2>
        <div className="categories-grid">
          {categories.map((cat) => (
            <Link key={cat} to={`/books/${cat}`} className="category-card">
              {cat}
            </Link>
          ))}
        </div>
      </section>

      {/* Popular Books section */}
      <section className="section">
        <h2>Popular Books</h2>
        <div className="books-grid">
          {popularBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <Link to="/books" className="btn btn-secondary">View All Books →</Link>
        </div>
      </section>
    </div>
  )
}

export default Home
