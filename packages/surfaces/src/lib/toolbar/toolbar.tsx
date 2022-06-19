import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface ToolbarProps {}

const StyledToolbar = styled.div`
  color: pink;
`;

export function Toolbar(props: ToolbarProps) {
  return (
    <StyledToolbar>
      <h1>Welcome to Toolbar!</h1>
    </StyledToolbar>
  );
}

export default Toolbar;
