import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface MenuProps {}

const StyledMenu = styled.div`
  color: pink;
`;

export function Menu(props: MenuProps) {
  return (
    <StyledMenu>
      <h1>Welcome to Menu!</h1>
    </StyledMenu>
  );
}

export default Menu;
