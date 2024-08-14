import styled from 'styled-components';

const Empty = () => {
  return (
    <EmptyFrame>
      🦆<span>🦆🦆</span>
    </EmptyFrame>
  );
};

const EmptyFrame = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: row;
  gap: 8px;
  font-size: 32px;
`;

export default Empty;
