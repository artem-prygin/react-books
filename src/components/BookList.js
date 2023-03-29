import { useContext, useEffect } from 'react';
import BookContext from '../context/BookContext';
import BookShow from './BookShow';

const BookList = () => {
    const { books, fetchBooks } = useContext(BookContext);
    useEffect(() => fetchBooks, []);

    return <div className="d-flex">
        {books.map(book => <BookShow key={book.id}
                                     book={book}/>)}
    </div>;
};

export default BookList;
