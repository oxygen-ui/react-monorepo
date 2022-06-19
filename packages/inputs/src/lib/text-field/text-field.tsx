import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface TextFieldProps {}

const StyledTextField = styled.div`
  color: pink;
`;

export function TextField(props: TextFieldProps) {
  return (
    <StyledTextField>
      <h1>Welcome to TextField!</h1>
    </StyledTextField>
  );
}

export default TextField;
