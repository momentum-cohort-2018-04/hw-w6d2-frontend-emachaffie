import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Book from './Book'
import books from './books.json'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      bookInfoExpanded: false,
      books: books
    }
  }

  render () {
    return (
      <div>
        <h1>Read About Coding So You Can Read Code</h1>
        {books.map((book, i) => (
          <div key={i} className='bookDiv'>
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>About this book: {book.shortDescription}</p>
            <img src={book.coverImageUrl} />
            {/* wrap below in <a> tag? */}
            <p className='readMoreOrLess'>Read more</p>
            <div className='expandedBookDiv'>
              <p><a href src={book.url} /></p>
              <p>Publisher: {book.publisher}</p>
              <p>Published {book.publicationDate}</p>
              <p>In more detail: {book.detailedDescription}</p>
            </div>
          </div>
        ))}

      </div>
    )
  }
}

export default App
