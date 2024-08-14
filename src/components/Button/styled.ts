import { InterpolationMapped, Theme } from '@styles/theme';
import styled, { css, keyframes } from 'styled-components';

import { Variant, VARIANTS } from './types';

interface StyledButtonProps {
  $variant?: Variant;
}

interface ThemedButtonProps extends StyledButtonProps {
  theme: Theme;
}

const getVariantStyle = ({
  $variant = VARIANTS.SUCCESS,
  theme,
}: ThemedButtonProps) => {
  const styles = {
    [VARIANTS.SUCCESS]: {
      color: theme.palette.success.contrast,
      '&::after': {
        backgroundColor: theme.palette.success.main,
      },
    },
    [VARIANTS.WARNING]: {
      color: theme.palette.warning.contrast,
      '&::after': {
        backgroundColor: theme.palette.warning.main,
      },
    },
    [VARIANTS.DANGER]: {
      color: theme.palette.danger.contrast,
      '&::after': {
        backgroundColor: theme.palette.danger.main,
      },
    },
    [VARIANTS.LOADING]: {
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '150%',
        height: '100%',
        backgroundImage: `repeating-linear-gradient(60deg, transparent, transparent 0.75rem, ${theme.palette.common.white60} 0.75rem, ${theme.palette.common.white60} 1.5rem)`,
      },
      '&:disabled': {
        '&::after': {
          backgroundColor: 'unset',
        },
      },
    },
  } as InterpolationMapped<Variant>;

  return styles[$variant];
};

const getLoadingAnimation = ({ $variant }: ThemedButtonProps) => {
  const loading = keyframes`
    0% {
      transform: translateX(0)
    }
    100% {
      transform: translateX(-1.75rem)
    }
  `;

  return (
    $variant === 'loading' &&
    css`
      &::before {
        animation: ${loading} 1s infinite linear;
      }
    `
  );
};

export const ButtonFrame = styled.button<StyledButtonProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  flex-shrink: 0;

  position: relative;
  overflow: hidden;

  height: 46px;
  padding: 10px 16px;
  background-color: transparent;
  border: none;
  outline: none;
  user-select: none;

  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;

    border-radius: 8px;
    box-shadow:
      inset 0 0 0 2px ${({ theme }) => theme.palette.border.main},
      inset 0 -6px 0 0 ${({ theme }) => theme.palette.common.muted};
    background-image: linear-gradient(
      -60deg,
      transparent 0%,
      transparent 40%,
      ${({ theme }) => theme.palette.common.white60} 40%,
      ${({ theme }) => theme.palette.common.white60} 60%,
      transparent 60%,
      transparent 100%
    );
    background-size: 200% 100%;
    background-repeat: no-repeat;
    background-position-x: 150%;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.palette.disabled.main};
    color: ${({ theme }) => theme.palette.disabled.contrast};

    cursor: not-allowed;

    &::after {
      background-color: ${({ theme }) => theme.palette.disabled.main};
    }
  }

  &:not(:disabled)::after {
    transition: background-position-x 2s;
  }

  &:not(:disabled):hover::after {
    background-position-x: -150%;
  }

  &:not(:disabled):active {
    &::after {
      box-shadow:
        inset 0 0 0 2px ${({ theme }) => theme.palette.border.main},
        inset 0 -4px 0 0 ${({ theme }) => theme.palette.common.muted};
      height: calc(100% - 2px);
    }

    .ButtonLabel {
      transform: translateY(2px);
    }
  }

  .ButtonLabel {
    position: relative;
    z-index: 1;

    display: flex;
  }

  ${({ theme }) => theme.typography.semi16}
  ${getVariantStyle};
  ${getLoadingAnimation};
`;
