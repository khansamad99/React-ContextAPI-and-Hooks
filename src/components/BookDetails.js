import React, { useContext } from 'react';
import { BookProvider } from '../context/BookContext';

const BookDetails = ({ book }) => {
  const { removeBook } = useContext(BookProvider);
  return (
    <li onClick={() => removeBook(book.id)}>
      <div className="title">{book.title}</div>
      <div className="author">{book.author}</div>
    </li>
  );
}

export default BookDetails;