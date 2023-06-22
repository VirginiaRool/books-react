import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({ book, onDelete }) {
  const [showEdit, setShowEdit] = useState(false); //default false, because I don't want the showEdit by default

  const handleDeleteClick = () => {
    onDelete(book.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit); // toggle !showedit = no showEdit
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    //if showEdit is true, I don't want to display {book.title},
    // instead it will show the <BookEdit/> component
    content = <BookEdit book={book} />;
  }

  return (
    <div className="book-show">
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
