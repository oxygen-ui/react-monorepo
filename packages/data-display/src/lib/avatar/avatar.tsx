import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface AvatarProps {}

const StyledAvatar = styled.div`
  color: pink;
`;

export function Avatar(props: AvatarProps) {
  return (
    <StyledAvatar>
      <h1>Welcome to Avatar!</h1>
    </StyledAvatar>
  );
}

export default Avatar;
