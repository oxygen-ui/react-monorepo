import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface SwitchProps {}

const StyledSwitch = styled.div`
  color: pink;
`;

export function Switch(props: SwitchProps) {
  return (
    <StyledSwitch>
      <h1>Welcome to Switch!</h1>
    </StyledSwitch>
  );
}

export default Switch;
