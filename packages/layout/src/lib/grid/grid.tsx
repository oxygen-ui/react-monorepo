import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface GridProps {}

const StyledGrid = styled.div`
  color: pink;
`;

export function Grid(props: GridProps) {
  return (
    <StyledGrid>
      <h1>Welcome to Grid!</h1>
    </StyledGrid>
  );
}

export default Grid;
