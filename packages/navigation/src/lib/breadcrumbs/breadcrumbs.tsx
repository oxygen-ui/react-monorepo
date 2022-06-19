import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface BreadcrumbsProps {}

const StyledBreadcrumbs = styled.div`
  color: pink;
`;

export function Breadcrumbs(props: BreadcrumbsProps) {
  return (
    <StyledBreadcrumbs>
      <h1>Welcome to Breadcrumbs!</h1>
    </StyledBreadcrumbs>
  );
}

export default Breadcrumbs;
