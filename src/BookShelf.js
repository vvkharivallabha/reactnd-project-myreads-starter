import React from "react";
import ListBooks from "./ListBooks.js";
import PropTypes from "prop-types";

/**
 * @description Shows shelf of given type with list of books
 * Available shelfs are currently reading, want to read and read
 * @param props 
 * @returns {JSX.Element}
 */
function BookShelf(props) {
    const { title, books, updateBook } = props;
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <ListBooks books={books} updateBook={updateBook} />
        </div>
    )
}

BookShelf.propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    updateBook: PropTypes.func.isRequired
}

export default BookShelf