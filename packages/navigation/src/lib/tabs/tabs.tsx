import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface TabsProps {}

const StyledTabs = styled.div`
  color: pink;
`;

export function Tabs(props: TabsProps) {
  return (
    <StyledTabs>
      <h1>Welcome to Tabs!</h1>
    </StyledTabs>
  );
}

export default Tabs;
