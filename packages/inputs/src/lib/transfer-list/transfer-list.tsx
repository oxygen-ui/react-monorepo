import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface TransferListProps {}

const StyledTransferList = styled.div`
  color: pink;
`;

export function TransferList(props: TransferListProps) {
  return (
    <StyledTransferList>
      <h1>Welcome to TransferList!</h1>
    </StyledTransferList>
  );
}

export default TransferList;
