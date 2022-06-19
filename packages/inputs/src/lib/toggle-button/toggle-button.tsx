import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface ToggleButtonProps {}

const StyledToggleButton = styled.div`
  color: pink;
`;

export function ToggleButton(props: ToggleButtonProps) {
  return (
    <StyledToggleButton>
      <h1>Welcome to ToggleButton!</h1>
    </StyledToggleButton>
  );
}

export default ToggleButton;
