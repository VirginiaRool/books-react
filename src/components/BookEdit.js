import { useState } from "react";

function BookEdit({ book }) {
  console.log(book);
  const [title, setTitle] = useState(book.title);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form className="book-edit" onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" onChange={handleChange} value={title} />
        <button className="button is-primary">Save</button>
      </form>
    </div>
  );
}

export default BookEdit;
