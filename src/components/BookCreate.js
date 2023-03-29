import { useContext, useState } from 'react';
import BookContext from '../context/BookContext';
import './BookCreate.scss';

const BookCreate = () => {
    const [title, setTitle] = useState('');
    const { createBook } = useContext(BookContext);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        createBook(title);
        setTitle('');
    };

    const handleOnChange = (e) => {
        setTitle(e.target.value);
    };

    return <div className="book-create">
        <form onSubmit={handleOnSubmit}>
            <input type="text"
                   onChange={handleOnChange}
                   value={title}/>

            <button>Add Book</button>
        </form>
    </div>;
};

export default BookCreate;
