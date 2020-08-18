import React, { useState, useContext } from "react";
import { BookContext } from "./../contexts/BookContext";

function BookForm() {
  const { dispatch } = useContext(BookContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const { title, author } = form.elements;
    dispatch({
      type: "ADD_BOOK",
      book: { title: title.value, author: author.value },
    });
    form.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input id="title" type="text" placeholder="Book Title" />
      <input id="author" type="text" placeholder="Book Author" />
      <button>Add Book</button>
    </form>
  );
}

export default BookForm;
