import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";

/**
 * @description Shows ordered list of books
 * @param props 
 * @returns {JSX.Element}
 */
function ListBooks(props) {
  const { books, updateBook } = props;
  return (
    <ol className="books-grid">
      {books.map(book => <li key={book.id}><Book book={book} updateBook={updateBook} /></li>)}
    </ol>
  )
}

ListBooks.propTypes = {
  books: PropTypes.array.isRequired,
  updateBook: PropTypes.func.isRequired
}

export default ListBooks;