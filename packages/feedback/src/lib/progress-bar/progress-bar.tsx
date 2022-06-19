import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface ProgressBarProps {}

const StyledProgressBar = styled.div`
  color: pink;
`;

export function ProgressBar(props: ProgressBarProps) {
  return (
    <StyledProgressBar>
      <h1>Welcome to ProgressBar!</h1>
    </StyledProgressBar>
  );
}

export default ProgressBar;
