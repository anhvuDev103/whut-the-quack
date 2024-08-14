import Modal, { ModalProps } from '@components/primitives/Modal';

import AddTreeForm from './components/AddTreeForm';

const AddTreeModal: React.FC<Partial<ModalProps>> = ({ ...props }) => {
  return (
    <Modal label='Add Tree' {...props}>
      <AddTreeForm />
    </Modal>
  );
};

export default AddTreeModal;
