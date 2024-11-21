import { Box, Modal } from '@mui/material';
import DishForm from '../DishForm/DishForm.tsx';
import { useParams } from 'react-router-dom';
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

interface Props {
  modalOpen: boolean;
  onChangeModal:VoidFunction
}


const ModalWindow:React.FC<Props> = ({modalOpen, onChangeModal}) => {
  const {id} = useParams();
  console.log(id);

  return (
    <div>
      <Modal
        open={modalOpen}
        onClose={onChangeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <DishForm onChangeModal={onChangeModal}/>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalWindow;