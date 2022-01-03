import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI.js";
import ListBooks from "./ListBooks.js";
import PropTypes from "prop-types";

/**
 * @description Search for books by title and shows empty view 
 * if query returns empty list, or search values is empty
 * @param props
 * @returns {JSX.Element}
 */
class SearchBooks extends Component {
  static propTypes = {
    updateBook: PropTypes.func.isRequired,
    getAssignedShelf: PropTypes.func.isRequired
  }

  state = {
    error: "",
    searchResults: [],
    searchValue: ""
  }

  handleOnChange = (event) => {
    event.persist();
    const query = event.target.value.trim();
    this.setState(() => ({
      searchValue: query
    }), this.getSearchedBooks(query))
  }

  getSearchedBooks = (searchValue) => {
    const { getAssignedShelf } = this.props;
    if (searchValue === "") {
      this.setState(() => ({
        searchResults: []
      }))
    } else {
      BooksAPI.search(searchValue).then((books) => {
        if (books.error) {
          this.setState(() => ({
            error: books.error,
            searchResults: []
          }))
        } else {
          this.setState(() => ({
            error: "",
            searchResults: books.map(getAssignedShelf),
          }))
        }
      })
    }
  }

  render() {
    const { updateBook } = this.props;
    const { searchValue, searchResults, error } = this.state;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" onChange={this.handleOnChange} />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {error && <div>{error}</div>}
            {searchResults && searchValue && <ListBooks books={searchResults} updateBook={updateBook} />}
          </ol>
        </div>
      </div>)
  }
}

export default SearchBooks;