import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface DatagridProps {}

const StyledDatagrid = styled.div`
  color: pink;
`;

export function Datagrid(props: DatagridProps) {
  return (
    <StyledDatagrid>
      <h1>Welcome to Datagrid!</h1>
    </StyledDatagrid>
  );
}

export default Datagrid;
