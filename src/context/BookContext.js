import { createContext, useState } from 'react';
import axios from 'axios';
import config from '../environment/environment.dev';

const BookContext = createContext(null);

const Provider = ({ children }) => {
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        const res = await axios.get(config.db);
        setBooks(res.data);
        console.log(res.data);
    };

    const createBook = async (title) => {
        const res = await axios.post(config.db, {
            title,
        });
        console.log(res.data);
        setBooks([...books, res.data]);
    };

    const editBook = async (id, title) => {
        const res = await axios.put(`${config.db}/${id}`, {
            title,
        });
        const index = books.findIndex(book => book.id === id);
        if (index !== -1) {
            const updatedBooks = [...books];
            updatedBooks[index] = res.data;
            setBooks(updatedBooks);
        }
    };

    const deleteBook = async (id) => {
        await axios.delete(`${config.db}/${id}`);
        const updatedBooks = books.filter(book => book.id !== id);
        setBooks(updatedBooks);
    };

    const value = {
        books,
        fetchBooks,
        createBook,
        editBook,
        deleteBook,
    };

    return (
        <BookContext.Provider value={value}>
            {children}
        </BookContext.Provider>
    );
};

export default BookContext;
export { Provider };
