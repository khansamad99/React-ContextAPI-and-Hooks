import React,{useContext} from 'react';
import {BookProvider} from '../context/BookContext';

const Navbar = () =>{
    const {books} = useContext(BookProvider);
    return (
        <div className="navbar">
            <h1>My Reading List</h1>
            <p>Currently we have {books.length} Books</p>
        </div>
    )
}

export default Navbar;