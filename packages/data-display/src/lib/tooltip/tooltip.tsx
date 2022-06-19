import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface TooltipProps {}

const StyledTooltip = styled.div`
  color: pink;
`;

export function Tooltip(props: TooltipProps) {
  return (
    <StyledTooltip>
      <h1>Welcome to Tooltip!</h1>
    </StyledTooltip>
  );
}

export default Tooltip;
