import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface DrawerProps {}

const StyledDrawer = styled.div`
  color: pink;
`;

export function Drawer(props: DrawerProps) {
  return (
    <StyledDrawer>
      <h1>Welcome to Drawer!</h1>
    </StyledDrawer>
  );
}

export default Drawer;
