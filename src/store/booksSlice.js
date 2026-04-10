// booksSlice.js - Redux slice for managing books state
import { createSlice } from '@reduxjs/toolkit'

// Initial dummy book data for the library
const initialBooks = [
  {
    id: 1,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    category: 'Fiction',
    description: 'A story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, set in the summer of 1922.',
    rating: 4.2,
    cover: 'https://covers.openlibrary.org/b/id/8432895-L.jpg',
  },
  {
    id: 2,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    category: 'Fiction',
    description: 'The story of racial injustice and the loss of innocence in the American South, seen through the eyes of young Scout Finch.',
    rating: 4.8,
    cover: 'https://covers.openlibrary.org/b/id/8228691-L.jpg',
  },
  {
    id: 3,
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    category: 'Non-Fiction',
    description: 'A brief history of humankind, exploring how Homo sapiens came to dominate the Earth.',
    rating: 4.5,
    cover: 'https://covers.openlibrary.org/b/id/8571571-L.jpg',
  },
  {
    id: 4,
    title: 'Dune',
    author: 'Frank Herbert',
    category: 'Sci-Fi',
    description: 'Set in the distant future amidst a feudal interstellar society, Dune tells the story of young Paul Atreides on the desert planet Arrakis.',
    rating: 4.7,
    cover: 'https://covers.openlibrary.org/b/id/10521270-L.jpg',
  },
  {
    id: 5,
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    category: 'Fiction',
    description: 'A philosophical novel about a young Andalusian shepherd who travels to Egypt after having a recurring dream of finding treasure there.',
    rating: 4.3,
    cover: 'https://covers.openlibrary.org/b/id/8298560-L.jpg',
  },
  {
    id: 6,
    title: 'A Brief History of Time',
    author: 'Stephen Hawking',
    category: 'Non-Fiction',
    description: 'Hawking explores the nature of time, black holes, and the origin of the universe in this landmark popular science book.',
    rating: 4.6,
    cover: 'https://covers.openlibrary.org/b/id/8406786-L.jpg',
  },
  {
    id: 7,
    title: 'Foundation',
    author: 'Isaac Asimov',
    category: 'Sci-Fi',
    description: 'The story of a group of scientists who preserve knowledge as the Galactic Empire collapses around them.',
    rating: 4.5,
    cover: 'https://covers.openlibrary.org/b/id/10756818-L.jpg',
  },
  {
    id: 8,
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    category: 'Fantasy',
    description: 'Bilbo Baggins, a hobbit who lives a quiet life, is thrust into an epic quest with a group of dwarves to reclaim their homeland.',
    rating: 4.9,
    cover: 'https://covers.openlibrary.org/b/id/8406786-L.jpg',
  },
  {
    id: 9,
    title: 'Harry Potter and the Sorcerer\'s Stone',
    author: 'J.K. Rowling',
    category: 'Fantasy',
    description: 'Harry Potter discovers he is a wizard on his 11th birthday and begins his journey at Hogwarts School of Witchcraft and Wizardry.',
    rating: 4.8,
    cover: 'https://covers.openlibrary.org/b/id/10110415-L.jpg',
  },
  {
    id: 10,
    title: 'Murder on the Orient Express',
    author: 'Agatha Christie',
    category: 'Mystery',
    description: 'Detective Hercule Poirot investigates a murder on a luxurious train journey through Europe.',
    rating: 4.4,
    cover: 'https://covers.openlibrary.org/b/id/8479137-L.jpg',
  },
]

// Create the books slice with initial state and reducers
const booksSlice = createSlice({
  name: 'books',
  initialState: {
    books: initialBooks,
  },
  reducers: {
    // Action to add a new book to the beginning of the list
    addBook: (state, action) => {
      state.books.unshift(action.payload) // Add new book at the beginning
    },
  },
})

// Export the action creator
export const { addBook } = booksSlice.actions

// Export the reducer
export default booksSlice.reducer