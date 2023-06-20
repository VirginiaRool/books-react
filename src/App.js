import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const deleteBookbyId = (id) => {
    // Filter can remove elements by index and doesn't modifies the original array, it gives us a new array
    const updatedBooks = books.filter((book) => {
      // if returns true, we want to keep the book around.
      // if returns false, we don't want the book anymore.
      return book.id !== id;
      //after create the new array "updateBooks", we update the "books" state
      setBooks(updatedBooks);
    });
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
