import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const deleteBookbyId = (id) => {
    // Filter can remove elements by index, doesn't modifies the original array, it gives a new array
    const updatedBooks = books.filter((book) => {
      // if returns true, we want to keep the book around.
      // if returns false, we don't want the book anymore.
      return book.id !== id;
      //after create the new array updateBooks, update "books" state
    });
    setBooks(updatedBooks);
  };

  const createBook = (title) => {
    const updatedBooks = [
      ...books,
      { id: Math.round(Math.random() * 9999), title },
    ];
    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <BookList books={books} onDelete={deleteBookbyId} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
