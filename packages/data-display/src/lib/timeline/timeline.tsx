import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface TimelineProps {}

const StyledTimeline = styled.div`
  color: pink;
`;

export function Timeline(props: TimelineProps) {
  return (
    <StyledTimeline>
      <h1>Welcome to Timeline!</h1>
    </StyledTimeline>
  );
}

export default Timeline;
