import { useContext, useState } from 'react';
import BookContext from '../context/BookContext';
import ModalMessage from './ModalMessage';
import './BookEdit.scss';

const BookEdit = ({ book, handleEditMode }) => {
    const [title, setTitle] = useState(book.title);
    const [modalClose, setModalClose] = useState(false);
    const { editBook } = useContext(BookContext);

    const handleOnChange = (e) => {
        setTitle(e.target.value);
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();

        if (title.length === 0) {
            setModalClose(true);
            return;
        }

        editBook(book.id, title);
        handleEditMode(false);
    };

    const handleCloseModal = () => {
        setModalClose(!modalClose);
    };

    return (
        <>
            <form onSubmit={handleOnSubmit}
                  className="book-edit d-flex justify-between">
                <input value={title}
                       onChange={handleOnChange}/>
                <button>Save</button>
            </form>

            {modalClose && <ModalMessage handleCloseModal={handleCloseModal}
                                         message="Book title can't be empty"/>}
        </>
    );
};

export default BookEdit;
