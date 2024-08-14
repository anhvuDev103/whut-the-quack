import Button from '@components/Button';
import { VARIANTS } from '@components/Button/types';
import styled from 'styled-components';

export interface ModalProps {
  label: string;
  children: React.ReactNode;
  actions?: React.ReactNode;
  dismiss?: () => void;
  noDismissOnLabel?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  label,
  children,
  dismiss,
  actions,
  noDismissOnLabel,
  ...props
}) => {
  return (
    <ModalFrame {...props}>
      <div className='Modal-Header'>
        <div className='Modal-Header-Label'>{label}</div>
        {!noDismissOnLabel && (
          <Button
            className='Modal-Header-Close'
            variant={VARIANTS.DANGER}
            onClick={dismiss}
          >
            ✖
          </Button>
        )}
      </div>
      <div className='Modal-Body'>{children}</div>
      {actions && <div className='Modal-Action'>{actions}</div>}
    </ModalFrame>
  );
};

const ModalFrame = styled.div`
  height: 100%;
  min-height: 320px;
  max-height: 80vh;

  display: flex;
  flex-direction: column;
  align-items: stretch;

  background-color: ${({ theme }) => theme.palette.background.paper};
  border-radius: 16px;
  box-shadow: ${({ theme }) => theme.boxShadow.main};
  border: 2px solid ${({ theme }) => theme.palette.border.main};

  [alt='close'] {
    width: 24px;
    height: 24px;
  }

  .Modal-Header {
    border-bottom: 2px solid ${({ theme }) => theme.palette.common.muted};
    padding: 16px 24px;
    background-image: linear-gradient(
      -60deg,
      transparent 0%,
      transparent 45%,
      ${({ theme }) => theme.palette.common.white60} 45%,
      ${({ theme }) => theme.palette.common.white60} 50%,
      transparent 50%,
      transparent 51%,
      ${({ theme }) => theme.palette.common.white60} 51%,
      ${({ theme }) => theme.palette.common.white60} 52%,
      transparent 52%,
      transparent 100%
    );
    background-size: 200% 100%;
    background-repeat: no-repeat;
    background-color: ${({ theme }) => theme.palette.warning.main};
    background-position-x: 15%;
    border-radius: 14px 14px 0 0;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .Modal-Header-Label {
    font-size: 20px;
    font-weight: 500;
  }

  .Modal-Header-Close {
    padding: 0;
    width: 32px;
    height: 32px;

    .ButtonLabel {
      font-size: 1.4rem;
    }
  }

  .Modal-Body {
    padding: 24px;

    overflow-y: auto;
  }

  .Modal-Action {
    padding: 24px;
    margin-top: auto;
    border-top: 1px solid ${({ theme }) => theme.palette.border.main};
  }
`;

export default Modal;
