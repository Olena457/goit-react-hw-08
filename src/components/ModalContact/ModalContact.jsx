import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import Modal from '@mui/material/Modal';
import { MdDelete } from 'react-icons/md';
import toast from 'react-hot-toast';
import { IconContext } from 'react-icons';
import css from '../ModalContact/ModalContact.module.css';
import { deleteContact } from '../../redux/contacts/operations.js';

const style = {
  position: 'absolute',
  borderRadius: 4,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#f0f0f0',
  boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.2)',
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
            Are you sure you want to delete the contact?
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
