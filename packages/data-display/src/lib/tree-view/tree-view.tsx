import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface TreeViewProps {}

const StyledTreeView = styled.div`
  color: pink;
`;

export function TreeView(props: TreeViewProps) {
  return (
    <StyledTreeView>
      <h1>Welcome to TreeView!</h1>
    </StyledTreeView>
  );
}

export default TreeView;
