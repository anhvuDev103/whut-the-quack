import Panel from '@components/primitives/Panel';
import styled from 'styled-components';

export const AddForm = styled.form`
  display: flex;
  align-items: stretch;
  flex-direction: column;
  gap: 16px;

  .Contract-AddAction {
    margin-top: 8px;
  }
`;

export const TreeFrame = styled(Panel)`
  grid-row: 1/4;
`;

export const TreeFrameEmpty = styled(Panel)`
  grid-row: 1/4;
`;
