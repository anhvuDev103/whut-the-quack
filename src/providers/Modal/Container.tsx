import { Context as ModalContext } from '@providers/Modal/core';
import { useContext } from 'react';

import {
  ModalBackdropFrame,
  ModalBodyFrame,
  ModalContainerFrame
} from './styled';
import { ModalContainerProps } from './types';

const ModalContainer: React.FC<ModalContainerProps> = ({ children }) => {
  const { isVisible } = useContext(ModalContext) || {};

  return (
    <ModalContainerFrame $visible={isVisible}>
      <ModalBodyFrame>{children}</ModalBodyFrame>
      <ModalBackdropFrame />
    </ModalContainerFrame>
  );
};

export default ModalContainer;
