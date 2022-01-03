import React from "react";
import BookShelf from "./BookShelf";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

/**
 * @description Main view for books with shelfs and search bar
 * @param props 
 * @returns {JSX.Element}
 */
function BooksMainView(props) {
    const { shelfs, updateBook } = props;

    return (
        <div>
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    {shelfs.map(shelf => <BookShelf key={shelf.title} title={shelf.title} books={shelf.books} updateBook={updateBook} />)}
                </div>
            </div>
            <div className="open-search">
                <Link to="/search" ><button>Add a book</button></Link>
            </div>
        </div>
    )
}

BooksMainView.propTypes = {
    shelfs: PropTypes.array.isRequired,
    updateBook: PropTypes.func.isRequired
}

export default BooksMainView