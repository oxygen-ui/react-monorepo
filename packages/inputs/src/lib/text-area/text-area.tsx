import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface TextAreaProps {}

const StyledTextArea = styled.div`
  color: pink;
`;

export function TextArea(props: TextAreaProps) {
  return (
    <StyledTextArea>
      <h1>Welcome to TextArea!</h1>
    </StyledTextArea>
  );
}

export default TextArea;
