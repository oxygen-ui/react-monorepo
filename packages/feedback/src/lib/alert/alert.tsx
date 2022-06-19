import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface AlertProps {}

const StyledAlert = styled.div`
  color: pink;
`;

export function Alert(props: AlertProps) {
  return (
    <StyledAlert>
      <h1>Welcome to Alert!</h1>
    </StyledAlert>
  );
}

export default Alert;
