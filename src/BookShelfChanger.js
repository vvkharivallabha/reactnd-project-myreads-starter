import React, { Component } from "react";
import PropTypes from "prop-types";

/**
 * @description Shows a dropdown to change or select assigned shelf for a book
 * @param props
 * @returns {JSX.Element}
 */
class BookShelfChanger extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        updateBook: PropTypes.func.isRequired
    }

    state = {
        selectedIndex: 0
    }

    options = [
        { value: "move", label: "Move to..." },
        { value: "currentlyReading", label: "Currently Reading" },
        { value: "wantToRead", label: "Want to Read" },
        { value: "read", label: "Read" },
        { value: "none", label: "None" }
    ]

    componentDidMount() {
        const { book } = this.props;
        this.setState(() => ({
            selectedIndex: this.options.findIndex(option => option.value === book.shelf)
        }))
    }

    handleOnChange = (event) => {
        const { selectedIndex } = event.target;
        const { book, updateBook } = this.props;
        this.setState(() => ({
            selectedIndex: selectedIndex
        }));
        updateBook(book, this.options[selectedIndex].value);
    }

    render() {
        const { selectedIndex } = this.state;
        return (
            <div className="book-shelf-changer">
                <select value={selectedIndex !== -1 ? this.options[selectedIndex].value : this.options[4].value} onChange={this.handleOnChange}>
                    {this.options.map(option => <option key={option.value} value={option.value} disabled={option.value === "move"}>{option.label}</option>)}
                </select>
            </div>
        )
    }
}

export default BookShelfChanger;