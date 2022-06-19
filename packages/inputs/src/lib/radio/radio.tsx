import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface RadioProps {}

const StyledRadio = styled.div`
  color: pink;
`;

export function Radio(props: RadioProps) {
  return (
    <StyledRadio>
      <h1>Welcome to Radio!</h1>
    </StyledRadio>
  );
}

export default Radio;
