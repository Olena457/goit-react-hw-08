// import css from './Modal.module.css';
// const Modal = ({ onClose, children }) => {
//   return (
//     <div className={css.modalBackdrop} onClick={onClose}>
//       <div className={css.modalContent} onClick={e => e.stopPropagation()}>
//         {children}
//         <button className={css.closeButton} onClick={onClose}>
//           Close
//         </button>
//       </div>
//     </div>
//   );
// };
// export default Modal;
import css from './ModalContact.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations.js';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import toast from 'react-hot-toast';
import { MdDelete } from 'react-icons/md';
import { IconContext } from 'react-icons';

const style = {
  position: 'absolute',
  borderRadius: 4,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 22,
  p: 4,
};

export default function ModalContact({ item }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContact(item))
      .unwrap()
      .then(() => {
        toast.success('Contact successfully deleted');
      })
      .catch(() => {
        toast.error('Problem with  deleting a contact');
      });
    handleClose();
  };

  return (
    <div>
      <button onClick={handleOpen} className={css.btn}>
        <IconContext.Provider
          value={{
            color: 'white',
            size: '2em',
          }}
        >
          <MdDelete />
        </IconContext.Provider>
      </button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are you absolutely sure you want to delete the contact?
          </Typography>
          <button onClick={handleDeleteContact} className={css.btnModal}>
            <IconContext.Provider
              value={{
                color: 'white',
                size: '2em',
              }}
            >
              <MdDelete />
            </IconContext.Provider>
          </button>
        </Box>
      </Modal>
    </div>
  );
}
