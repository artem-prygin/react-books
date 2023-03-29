import { FiEdit } from 'react-icons/fi';
import { AiOutlineDelete } from 'react-icons/ai';
import { useContext, useState } from 'react';
import BookContext from '../context/BookContext';
import BookEdit from './BookEdit';

const BookShow = ({ book }) => {
    const [editMode, setEditMode] = useState(false);
    const { deleteBook, editBook } = useContext(BookContext);

    const handleDelete = () => {
        deleteBook(book.id);
    };

    const handleEditMode = () => {
        setEditMode(!editMode);
    };

    return (
        (<div className="book">
            {!editMode && <>
                <div className="icons">
                    <FiEdit onClick={handleEditMode}/>
                    <AiOutlineDelete onClick={handleDelete}/>
                </div>

                <img src={`https://picsum.photos/seed/${book.id}/200`}/>
                <div>{book.id}. {book.title}</div>
            </>}

            {editMode && <BookEdit/>}
        </div>)
    );
};

export default BookShow;
