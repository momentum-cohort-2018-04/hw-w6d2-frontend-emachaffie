import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Book from './Book'
import books from './books.json'
import $ from 'jquery'
window.$ = $

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      bookInfoExpanded: false,
      books: books,
      expandedBooks: []
      // array of books that has index of expanded books
      // look to see if index of book is in that array
    }
  }

  expandOrCollapse () {
    $('.expandedBookDiv').removeClass('hidden')
    $('.expandedBookDiv').addClass('expanded')
    $('#expandButton').html('Show Less')
  }

  // expandBookInfo () {
  // add or subtract class hidden on click AND change 'read more' to 'show less'
  // }

  render () {
    return (
      <div>
        <h1>Read About Coding So You Can Read Code</h1>
        {books.map((book, i) => (
          <div key={i} className='bookDiv'>
            {/* If key.value='', assign value 'Unavailable' */}
            <h3>{book.title}</h3>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>About this book:</strong> {book.shortDescription}</p>
            <img src={book.coverImageUrl} />
            <button type='button' id='expandButton' className='showMoreOrLess' onClick={this.expandOrCollapse}>Show more</button>
            <div className='expandedBookDiv hidden'>
              <p><a href={book.url}>Find this book on the web</a></p>
              <p><strong>Publisher:</strong> {book.publisher}</p>
              <p><strong>Published</strong> {book.publicationDate}</p>
              <p>{book.detailedDescription}</p>
            </div>
          </div>
        ))}

      </div>
    )
  }
}

export default App
