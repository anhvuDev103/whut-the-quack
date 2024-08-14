import styled from 'styled-components';

interface StyledInputProps {}

export const InputFrame = styled.div<StyledInputProps>`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 4px;

  .Input-Head {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .Input-Error {
    color: ${({ theme }) => theme.palette.danger.main};
    ${({ theme }) => theme.typography.semi14}
  }

  .Input-Note {
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);

    color: ${({ theme }) => theme.palette.disabled.contrast};
    ${({ theme }) => theme.typography.medium16}
  }

  .Input-Container {
    position: relative;

    display: flex;
    align-items: stretch;
    gap: 8px;
  }

  label {
    ${({ theme }) => theme.typography.medium16}
  }

  input {
    width: 100%;
    outline: none;
    padding: 8px 16px;
    box-shadow: inset 0 2px 0 0 ${({ theme }) => theme.palette.common.muted};
    border: 2px solid ${({ theme }) => theme.palette.common.black60};
    border-radius: 8px;

    color: ${({ theme }) => theme.palette.common.black};

    &:focus {
      box-shadow: 0 0 0 3px ${({ theme }) => theme.palette.success[60]};
    }

    /* Chrome, Safari, Edge, Opera */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    &[type='number'] {
      appearance: textfield;
      -moz-appearance: textfield;
    }

    ${({ theme }) => theme.typography.medium16}
  }
`;
