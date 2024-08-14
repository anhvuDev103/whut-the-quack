import React, { useState } from 'react';
import styled, { css } from 'styled-components';

interface Props {
  label: string;
  enableClose?: boolean;
  children: React.ReactNode;
}

interface PanelFrameProps {
  $close: boolean;
}

const PanelFrame = styled.div<PanelFrameProps>`
  padding: 32px 16px;
  border-radius: 12px;
  border: 2px solid ${({ theme }) => theme.palette.border.main};
  background-color: ${({ theme }) => theme.palette.background.paper};
  box-shadow: ${({ theme }) => theme.boxShadow.main};

  position: relative;

  .Panel-Label {
    position: absolute;
    top: 0;
    left: 32px;
    transform: translateY(-50%);

    border: 2px solid ${({ theme }) => theme.palette.border.main};
    padding: 4px 12px;
    border-radius: 8px;
    box-shadow: inset 0 -2px 0 0 ${({ theme }) => theme.palette.common.muted};

    background-image: linear-gradient(
      -60deg,
      transparent 0%,
      transparent 40%,
      ${({ theme }) => theme.palette.common.white60} 40%,
      ${({ theme }) => theme.palette.common.white60} 50%,
      transparent 50%,
      transparent 55%,
      ${({ theme }) => theme.palette.common.white60} 55%,
      ${({ theme }) => theme.palette.common.white60} 58%,
      transparent 58%,
      transparent 100%
    );
    background-size: 200% 100%;
    background-repeat: no-repeat;
    background-color: ${({ theme }) => theme.palette.disabled.main};
    background-position-x: -20px;

    ${({ theme }) => theme.typography.semi16}
    color: ${({ theme }) => theme.palette.common.black};

    &.canClick {
      cursor: pointer;
    }
  }

  ${({ $close = false }) =>
    $close &&
    css`
      height: 0;

      & :not(.Panel-Label) {
        display: none;
      }
    `}
`;

const Panel: React.FC<Props> = ({ label, enableClose, children, ...props }) => {
  const [isClose, setIsClose] = useState<boolean>(false);
  const handleClose = () => {
    setIsClose((prev) => !prev);
  };

  return (
    <PanelFrame $close={isClose} {...props}>
      <div
        className={`Panel-Label ${enableClose ? 'canClick' : ''}`}
        onClick={enableClose ? handleClose : undefined}
      >
        {label}
      </div>
      {children}
    </PanelFrame>
  );
};

export default Panel;
