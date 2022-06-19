import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface PasswordProps {}

const StyledPassword = styled.div`
  color: pink;
`;

export function Password(props: PasswordProps) {
  return (
    <StyledPassword>
      <h1>Welcome to Password!</h1>
    </StyledPassword>
  );
}

export default Password;
