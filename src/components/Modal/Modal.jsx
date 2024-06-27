import css from './Modal.module.css';
const Modal = ({ onClose, children }) => {
  return (
    <div className={css.modalBackdrop} onClick={onClose}>
      <div className={css.modalContent} onClick={e => e.stopPropagation()}>
        {children}
        <button className={css.closeButton} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};
export default Modal;
