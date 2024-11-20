import { Box, Modal } from '@mui/material';
import { PropsWithChildren } from 'react';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface Props extends PropsWithChildren {
  modalOpen: boolean;
  children: React.ReactNode;
  onChangeModal:VoidFunction
}


const ModalWindow:React.FC<Props> = ({modalOpen, onChangeModal, children}) => {
  return (
    <div>
      <Modal
        open={modalOpen}
        onClose={onChangeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {children}
        </Box>
      </Modal>
    </div>
  );
};

export default ModalWindow;