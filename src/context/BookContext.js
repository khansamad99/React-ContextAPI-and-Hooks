import React,{useState,createContext} from 'react';
import { v1 as uuidv1 } from 'uuid';

export const BookProvider = createContext();
const BookContextProvider = (props) => {
    const [books,setBooks] = useState([
        {title:'Mirzapur',author:'ABC',id:1},
        {title:'The Family Man',author:'DEF',id:2}
    ]);
    const addBook = (title,author) => {
        setBooks([...books,{title,author,id:uuidv1()}]);
    };

    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id));
    };
    return (
        <BookProvider.Provider value={{books,addBook,removeBook}}>
            {props.children}
        </BookProvider.Provider>
    )
}

export default BookContextProvider;