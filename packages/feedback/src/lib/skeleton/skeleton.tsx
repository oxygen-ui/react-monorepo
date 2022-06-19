import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface SkeletonProps {}

const StyledSkeleton = styled.div`
  color: pink;
`;

export function Skeleton(props: SkeletonProps) {
  return (
    <StyledSkeleton>
      <h1>Welcome to Skeleton!</h1>
    </StyledSkeleton>
  );
}

export default Skeleton;
