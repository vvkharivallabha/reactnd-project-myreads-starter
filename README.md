# MyReads Project

This app showcases bookshelves with multiple book covers under three different categories namely Currently Reading, Want to Read, and Read. Users can categorize a book under these shelves, by choosing from options displayed under the dropdown for each book.

We can also search for books by their name and then choose to categorize them in provided shelf choices. 

This project is developed as part of udacity's react nanodegree course forked from [Original repo](https://github.com/udacity/reactnd-project-myreads-starter)

## Setting up

* install all project dependencies with `npm install`
* start the development server with `npm start`

## What You're Getting
```bash
.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
├── src
│   ├── icons # Helpful images for your app
│   │   ├── add.svg
│   │   ├── arrow-back.svg
│   │   └── arrow-drop-down.svg
│   ├── App.css  # Styles for your app.
│   ├── App.js # This is the root of your app.
│   ├── App.test.js
│   ├── Book.js # Component to display book with it's cover, name and author names
│   ├── BookShelf.js # Component which shows shelf with title and list of books provided as argument
│   ├── BookShelfChanger.js # Selector dropdown to choose book's shelf 
│   ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
│   ├── BooksMainView.js # Main view of app which showcases shelfs and add button (navigates to search)  
│   ├── ListBooks.js # Component renders ordered list of books (used by both BookMainView and SearchBooks)
│   ├── SearchBooks.js # Component displays searched books by name
│   ├── index.css # Global styles
│   └── index.js
├── CONTRIBUTING.md
├── README.md
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package-lock.json
├── package.json
└── yarn.lock
```

## Frontend Components
* [`Book.js`](src/Book.js)
* [`BookShelf.js`](src/BookShelf.js)
* [`BookShelfChanger.js`](src/BookShelfChanger.js)
* [`BooksMainView.js`](src/BooksMainView.js)
* [`ListBooks.js`](src/ListBooks.js)
* [`SearchBooks.js`](src/SearchBooks.js)

## Backend Server

The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the following backend methods:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
