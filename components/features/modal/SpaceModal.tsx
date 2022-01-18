import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { SpaceCard } from '../../models/SpaceCard';
import styles from './SpaceModal.module.css';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface Props {
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  spaceCard: SpaceCard;
}
export default function SpaceModal({ open, handleOpen, handleClose, spaceCard }: Props) {
  return (
    <div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className={styles.mui_modal}
      >
        <Box className={styles.space_modal_container}>
          <div className={styles.space_modal_img_wrapper}>
            <img className={styles.space_modal_img} src={spaceCard.hdurl ? spaceCard.hdurl : spaceCard.url} />
          </div>
          <h1 className={styles.space_modal_title}>
            {spaceCard.title}
          </h1>
          <p className={styles.space_modal_explanation}>
            {spaceCard.explanation}
          </p>
        </Box>
      </Modal>
    </div>
  );
}