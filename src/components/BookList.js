import React,{useContext} from 'react';
import BookDetails from './BookDetails';
import {BookProvider} from '../context/BookContext';

const BookList = () => {
     const {books} = useContext(BookProvider);
     return books.length ? (
         <div className="book-list">
            <ul>
                {books.map(book => {
                    return (<BookDetails book={book} key={book.id}/>);
                })}
            </ul>
         </div>
     ):(
         <div className="empty">
            No books to read
         </div>
     )
}

export default BookList;