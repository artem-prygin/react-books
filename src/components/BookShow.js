import { FiEdit } from 'react-icons/fi';
import { AiOutlineDelete } from 'react-icons/ai';
import { useContext, useState } from 'react';
import BookContext from '../context/BookContext';
import BookEdit from './BookEdit';

const BookShow = ({ book }) => {
    const [editMode, setEditMode] = useState(false);
    const { deleteBook } = useContext(BookContext);

    const handleDelete = () => {
        deleteBook(book.id);
    };

    const handleEditMode = () => {
        setEditMode(!editMode);
    };

    return (
        <div className="book">

            <div className="icons">
                <FiEdit className="pointer"
                        onClick={handleEditMode}/>
                <AiOutlineDelete className="pointer"
                                 onClick={handleDelete}/>
            </div>

            <img src={`https://picsum.photos/seed/${book.id}/200`}/>
            {editMode ? <BookEdit book={book}
                                  handleEditMode={handleEditMode}/> : <div>{book.id}. {book.title}</div>}
        </div>
    );
};

export default BookShow;
