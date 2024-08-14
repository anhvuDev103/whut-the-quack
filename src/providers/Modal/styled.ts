import styled, { css } from 'styled-components';

interface ModalContainerFrameProps {
  $visible: boolean;
}

export const ModalBodyFrame = styled.div`
  width: 100%;
  max-width: 424px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -40%);
  opacity: 0;
  transition: 200ms;

  z-index: 1;
`;

export const ModalBackdropFrame = styled.div`
  background-color: ${({ theme }) => theme.palette.common.black60};
  height: 100%;

  opacity: 0;
  transition: 200ms;

  position: absolute;
  inset: 0;
  z-index: 0;
`;

export const ModalContainerFrame = styled.div<ModalContainerFrameProps>`
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 1;

  ${({ $visible }) =>
    $visible &&
    css`
      pointer-events: all;
      ${ModalBodyFrame} {
        opacity: 1;
        transform: translate(-50%, -50%);
      }

      ${ModalBackdropFrame} {
        opacity: 1;
      }
    `}
`;
