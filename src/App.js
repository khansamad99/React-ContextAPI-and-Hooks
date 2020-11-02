import React from 'react';
import BookContextProvider from './context/BookContext';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import NewBook from './components/BookForm';

function App() {
  return (
    <BookContextProvider>
      <Navbar/>
      <BookList />
      <NewBook/>
    </BookContextProvider>
  );
}

export default App;
