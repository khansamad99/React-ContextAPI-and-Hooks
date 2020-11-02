import React,{useContext,useState} from 'react';
import {BookProvider} from '../context/BookContext';

const NewBook = () => {
    const {addBook} = useContext(BookProvider);
    const [title,setTitle] = useState('');
    const [author,setAuthor] = useState('');

    const handleSubmit = (e) => {
    e.preventDefault();
    addBook(title, author);
    setTitle('');
    setAuthor('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Book Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <input type="text" placeholder="Book Author" value={author} onChange={(e) => setAuthor(e.target.value)}/>
            <input type="submit" value="add book" />
        </form>
    )
}

export default NewBook;