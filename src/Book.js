import React from "react";
import BookShelfChanger from "./BookShelfChanger";
import PropTypes from "prop-types"

/**
 * @description Shows a book with cover, title and authors
 * @param props 
 * @returns {JSX.Element}
 */
function Book(props) {
    const { book, updateBook } = props;
    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: book.imageLinks ? `url("${book.imageLinks.thumbnail}")` : undefined }}></div>
                <BookShelfChanger book={book} updateBook={updateBook} />
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">
                {book.authors && book.authors.length > 0 && book.authors.map(author => (<div key={author} className="book-author">{author}</div>))}
            </div>
        </div>
    )
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    updateBook: PropTypes.func.isRequired
}

export default Book;