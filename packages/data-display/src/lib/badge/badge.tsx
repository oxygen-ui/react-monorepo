import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface BadgeProps {}

const StyledBadge = styled.div`
  color: pink;
`;

export function Badge(props: BadgeProps) {
  return (
    <StyledBadge>
      <h1>Welcome to Badge!</h1>
    </StyledBadge>
  );
}

export default Badge;
