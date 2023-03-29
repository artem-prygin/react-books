import './ModalMessage.scss';

const ModalMessage = ({ title, message, handleCloseModal }) => {
    return <div className="modal-wrapper">
        <div className="modal">
            <h5 className="mb-10">{title || 'Warning'}</h5>
            <div className="mb-10">{message || ''}</div>
            <button className="pointer"
                    onClick={handleCloseModal}>Close modal
            </button>
        </div>
    </div>;
};

export default ModalMessage;
