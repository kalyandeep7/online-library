// AddBook.jsx - Form to add a new book to the library using Redux
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addBook } from '../store/booksSlice'

// Available categories for the dropdown
const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi', 'Fantasy', 'Mystery', 'Biography']

function AddBook() {
  // Redux dispatch to send actions to the store
  const dispatch = useDispatch()

  // React Router hook to redirect after form submission
  const navigate = useNavigate()

  // Form state - holds all field values
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    category: '',
    description: '',
    rating: '',
    cover: '',
  })

  // Validation errors state
  const [errors, setErrors] = useState({})

  // Handle input changes and update form state
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error for the field being edited
    setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  // Validate all form fields before submission
  const validate = () => {
    const newErrors = {}

    if (!formData.title.trim()) newErrors.title = 'Title is required.'
    if (!formData.author.trim()) newErrors.author = 'Author is required.'
    if (!formData.category) newErrors.category = 'Please select a category.'
    if (!formData.description.trim()) newErrors.description = 'Description is required.'
    if (!formData.rating) {
      newErrors.rating = 'Rating is required.'
    } else if (formData.rating < 1 || formData.rating > 5) {
      newErrors.rating = 'Rating must be between 1 and 5.'
    }

    return newErrors
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()

    // Run validation
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors) // Show errors if any
      return
    }

    // Create a new book object with a unique id
    const newBook = {
      id: Date.now(), // Use timestamp as unique id
      title: formData.title.trim(),
      author: formData.author.trim(),
      category: formData.category,
      description: formData.description.trim(),
      rating: parseFloat(formData.rating),
      cover: formData.cover.trim() || 'https://via.placeholder.com/150x200?text=No+Cover',
    }

    // Dispatch the addBook action to Redux - adds book at the beginning
    dispatch(addBook(newBook))

    // Redirect to Browse Books page after successful submission
    navigate('/books')
  }

  return (
    <div className="page">
      <h1>Add a New Book</h1>

      <form className="add-book-form" onSubmit={handleSubmit}>
        {/* Title field */}
        <div className="form-group">
          <label htmlFor="title">Book Title *</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter book title"
            className={errors.title ? 'input-error' : ''}
          />
          {errors.title && <span className="error-msg">{errors.title}</span>}
        </div>

        {/* Author field */}
        <div className="form-group">
          <label htmlFor="author">Author *</label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            placeholder="Enter author name"
            className={errors.author ? 'input-error' : ''}
          />
          {errors.author && <span className="error-msg">{errors.author}</span>}
        </div>

        {/* Category dropdown */}
        <div className="form-group">
          <label htmlFor="category">Category *</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className={errors.category ? 'input-error' : ''}
          >
            <option value="">-- Select Category --</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          {errors.category && <span className="error-msg">{errors.category}</span>}
        </div>

        {/* Description field */}
        <div className="form-group">
          <label htmlFor="description">Description *</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter a short description of the book"
            rows={4}
            className={errors.description ? 'input-error' : ''}
          />
          {errors.description && <span className="error-msg">{errors.description}</span>}
        </div>

        {/* Rating field */}
        <div className="form-group">
          <label htmlFor="rating">Rating (1-5) *</label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            placeholder="e.g. 4.5"
            min="1"
            max="5"
            step="0.1"
            className={errors.rating ? 'input-error' : ''}
          />
          {errors.rating && <span className="error-msg">{errors.rating}</span>}
        </div>

        {/* Cover URL (optional) */}
        <div className="form-group">
          <label htmlFor="cover">Cover Image URL (optional)</label>
          <input
            type="text"
            id="cover"
            name="cover"
            value={formData.cover}
            onChange={handleChange}
            placeholder="https://example.com/cover.jpg"
          />
        </div>

        {/* Submit button */}
        <button type="submit" className="btn btn-primary btn-lg">
          Add Book
        </button>
      </form>
    </div>
  )
}

export default AddBook
