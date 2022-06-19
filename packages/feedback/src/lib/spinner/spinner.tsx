import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface SpinnerProps {}

const StyledSpinner = styled.div`
  color: pink;
`;

export function Spinner(props: SpinnerProps) {
  return (
    <StyledSpinner>
      <h1>Welcome to Spinner!</h1>
    </StyledSpinner>
  );
}

export default Spinner;
