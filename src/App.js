import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BooksMainView from './BooksMainView'
import SearchBooks from './SearchBooks'
import { BrowserRouter, Route, Routes } from "react-router-dom";

/**
 * @description Application to show books in pre-defined shelfs
 * and to search for books where we can also assign 
 * which shelf they go into
 */
class BooksApp extends React.Component {
  state = {
    currentlyReadingBooks: [],
    wantToReadBooks: [],
    readBooks: []
  }

  getAllBooks = () => {
    BooksAPI.getAll().then((allBooks) => {
      this.setState(() => ({
        currentlyReadingBooks: allBooks.filter(book => book.shelf === "currentlyReading"),
        wantToReadBooks: allBooks.filter(book => book.shelf === "wantToRead"),
        readBooks: allBooks.filter(book => book.shelf === "read")
      }))
    })
  }

  componentDidMount() {
    this.getAllBooks()
  }

  updateBook = (book, updatedShelfValue) => {
    BooksAPI.update(book, updatedShelfValue).then(() => {
      this.getAllBooks();
    })
  }

  getAssignedShelf = (bookToSearch) => {
    const { currentlyReadingBooks, wantToReadBooks, readBooks } = this.state;
    const result = [...currentlyReadingBooks, ...wantToReadBooks, ...readBooks].filter(book => book.id === bookToSearch.id);
    return result.length > 0 ? result[0] : bookToSearch;
  }

  getShelfs = () => {
    const { currentlyReadingBooks, wantToReadBooks, readBooks } = this.state;
    return [
      { title: "Currently Reading", books: currentlyReadingBooks },
      { title: "Want To Read", books: wantToReadBooks },
      { title: "Read", books: readBooks },
    ]
  }

  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<BooksMainView shelfs={this.getShelfs()} updateBook={this.updateBook} />} />
            <Route path="/search" element={<SearchBooks updateBook={this.updateBook} getAssignedShelf={this.getAssignedShelf} />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default BooksApp
